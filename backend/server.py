import os
import logging
from contextlib import asynccontextmanager
from dotenv import load_dotenv

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format="%(asctime)s - %(name)s - %(levelname)s - %(message)s"
)
logger = logging.getLogger(__name__)

load_dotenv()

try:
    from fastapi import FastAPI, Request
    from fastapi.middleware.cors import CORSMiddleware
    from fastapi.responses import JSONResponse
    from fastapi.exceptions import RequestValidationError
    from config.database import connect_db, close_db
    fastapi_available = True
except ImportError as e:
    logger.error(f"FastAPI not available: {e}")
    fastapi_available = False

try:
    from middleware.rate_limit import limiter
    from slowapi.errors import RateLimitExceeded
    slowapi_available = True
except ImportError as e:
    logger.warning(f"Rate limiting not available: {e}")
    slowapi_available = False

try:
    from routes import auth, dashboard, downloads, licenses, contact, subscriptions, payments, admin
    routes_available = True
except ImportError as e:
    logger.error(f"Some routes not available: {e}")
    routes_available = False

if fastapi_available:
    @asynccontextmanager
    async def lifespan(app: FastAPI):
        logger.info("Starting application...")
        try:
            await connect_db()
            logger.info("Database connected successfully")
        except Exception as e:
            logger.error(f"Failed to connect to database: {e}")
        yield
        await close_db()
        logger.info("Application shutdown complete")

    from fastapi.staticfiles import StaticFiles
    app = FastAPI(
        title="METAS API",
        description="MetaTrader 5 Trading Platform Backend",
        version="1.0.0",
        lifespan=lifespan
    )

    # Mount uploads static files directory
    os.makedirs("uploads", exist_ok=True)
    app.mount("/uploads", StaticFiles(directory="uploads"), name="uploads")

    # CORS Configuration
    allowed_origins = [
        os.getenv("FRONTEND_URL", "http://localhost:3000"),
        "http://localhost:3000",
        "http://127.0.0.1:3000"
    ]
    logger.info(f"Allowed CORS origins: {allowed_origins}")

    app.add_middleware(
        CORSMiddleware,
        allow_origins=allowed_origins,
        allow_credentials=True,
        allow_methods=["*"],
        allow_headers=["*"],
    )

    # Exception Handlers
    @app.exception_handler(RateLimitExceeded)
    async def rate_limit_handler(request: Request, exc: RateLimitExceeded):
        logger.warning(f"Rate limit exceeded for {request.client.host}")
        return JSONResponse(
            status_code=429,
            content={"detail": "Rate limit exceeded. Please try again later."}
        )

    @app.exception_handler(RequestValidationError)
    async def validation_exception_handler(request: Request, exc: RequestValidationError):
        logger.error(f"Validation error: {exc.errors()}")
        return JSONResponse(
            status_code=422,
            content={"detail": exc.errors()}
        )

    @app.exception_handler(Exception)
    async def global_exception_handler(request: Request, exc: Exception):
        logger.error(f"Unhandled exception: {str(exc)}", exc_info=True)
        return JSONResponse(
            status_code=500,
            content={"detail": "Internal server error. Please try again later."}
        )

    if slowapi_available:
        app.state.limiter = limiter

    if routes_available:
        app.include_router(auth.router)
        app.include_router(dashboard.router)
        app.include_router(downloads.router)
        app.include_router(licenses.router)
        app.include_router(contact.router)
        app.include_router(subscriptions.router)
        app.include_router(payments.router)
        app.include_router(admin.router)

    @app.get("/")
    async def root():
        return {
            "message": "METAS API",
            "version": "1.0.0",
            "status": "running"
        }

    @app.get("/api/health")
    async def health_check():
        return {"status": "ok"}

    if __name__ == "__main__":
        import uvicorn
        uvicorn.run(
            "server:app",
            host="0.0.0.0",
            port=8001,
            reload=True
        )
else:
    logger.error("FastAPI is not installed. Please install dependencies first.")
