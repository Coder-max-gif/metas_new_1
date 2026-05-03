# METAS Backend API - Complete Documentation

## 🚀 Quick Start

### Installation
```bash
cd /app/backend
pip install -r requirements.txt
```

### Environment Setup
```bash
cp .env.example .env
# Edit .env with your MongoDB credentials
```

### Run Server
```bash
uvicorn server:app --reload --host 0.0.0.0 --port 8001
```

Server will be available at: `http://localhost:8001`
API Docs: `http://localhost:8001/docs`

---

## 📚 API Endpoints

### Health Check
```bash
GET /api/health
```
Response:
```json
{
  "status": "ok"
}
```

---

## 🔐 Authentication

### Register User
```bash
POST /api/auth/register
Content-Type: application/json

{
  "email": "user@example.com",
  "password": "password123",
  "full_name": "John Doe"
}
```

Response:
```json
{
  "access_token": "eyJhbGc...",
  "refresh_token": "eyJhbGc...",
  "token_type": "bearer"
}
```

### Login
```bash
POST /api/auth/login
Content-Type: application/json

{
  "email": "user@example.com",
  "password": "password123"
}
```

Response: Same as register

### Get Current User
```bash
GET /api/auth/me
Authorization: Bearer <access_token>
```

Response:
```json
{
  "id": "uuid",
  "email": "user@example.com",
  "full_name": "John Doe",
  "role": "user",
  "subscription_type": "bundle",
  "subscription_status": "active",
  "created_at": "2026-05-03T12:00:00"
}
```

### Refresh Token
```bash
POST /api/auth/refresh
Content-Type: application/json

{
  "refresh_token": "eyJhbGc..."
}
```

### Logout
```bash
POST /api/auth/logout
Authorization: Bearer <access_token>
```

---

## 📊 Dashboard

### Get Dashboard Stats
```bash
GET /api/dashboard/stats
Authorization: Bearer <access_token>
```

Response:
```json
{
  "subscription": {
    "plan": "bundle",
    "status": "active"
  },
  "downloads": {
    "total": 4
  },
  "licenses": {
    "active": 1
  }
}
```

---

## 🔑 License Management

### Generate License (Admin Only)
```bash
POST /api/licenses/generate
Authorization: Bearer <admin_access_token>
Content-Type: application/json

{
  "user_id": "user-uuid",
  "plan": "bundle"
}
```

Response:
```json
{
  "license_key": "METAS-AB12-CD34",
  "user_id": "user-uuid",
  "plan": "bundle"
}
```

### Verify License (Public - For MT5 Client)
```bash
POST /api/licenses/verify
Content-Type: application/json

{
  "license_key": "METAS-AB12-CD34",
  "mt5_account": "1234567",
  "machine_id": "PC-001"
}
```

Response (Valid):
```json
{
  "valid": true,
  "plan": "bundle",
  "expires": null
}
```

Response (Invalid):
```json
{
  "valid": false,
  "message": "Invalid or inactive license"
}
```

### Get My Licenses
```bash
GET /api/licenses/my-licenses
Authorization: Bearer <access_token>
```

---

## 📥 Downloads

### Download Indicator
```bash
GET /api/downloads/indicator
Authorization: Bearer <access_token>
```

Requirements:
- Active subscription with plan: `indicator` or `bundle`
- Subscription status: `active` or `trial`

Returns: File download (MT5_Premium_Indicator.ex5)

### Download Algorithm
```bash
GET /api/downloads/algorithm
Authorization: Bearer <access_token>
```

Requirements:
- Active subscription with plan: `algorithm` or `bundle`
- Subscription status: `active` or `trial`

Returns: File download (MT5_Premium_Algorithm.ex5)

---

## 📧 Contact Form

### Submit Contact Message
```bash
POST /api/contact/submit
Content-Type: application/json

{
  "name": "John Doe",
  "email": "john@example.com",
  "subject": "Question about pricing",
  "message": "I would like to know..."
}
```

Response:
```json
{
  "message": "Contact form submitted successfully",
  "id": "contact-uuid"
}
```

---

## 💳 Subscription Management

### Activate Subscription (Admin Only)
```bash
POST /api/subscriptions/activate
Authorization: Bearer <admin_access_token>
Content-Type: application/json

{
  "user_id": "user-uuid",
  "plan": "bundle"
}
```

Plans: `indicator`, `algorithm`, `bundle`

Response:
```json
{
  "message": "Subscription activated successfully",
  "subscription_id": "sub-uuid"
}
```

### Get My Subscription
```bash
GET /api/subscriptions/me
Authorization: Bearer <access_token>
```

Response:
```json
{
  "subscription": {
    "id": "sub-uuid",
    "user_id": "user-uuid",
    "plan": "bundle",
    "status": "active",
    "start_date": "2026-05-03T12:00:00",
    "end_date": null,
    "auto_renew": true
  }
}
```

---

## 🔒 Security Features

### JWT Tokens
- **Access Token**: 15 minutes expiry
- **Refresh Token**: 7 days expiry
- Algorithm: HS256

### Rate Limiting
- Register: 5 requests/minute
- Login: 10 requests/minute

### Password Security
- Hashed with bcrypt
- Minimum 6 characters

### Protected Routes
All routes except `/api/auth/register`, `/api/auth/login`, `/api/licenses/verify`, and `/api/contact/submit` require JWT authentication.

---

## 🗄️ Database Collections

### users
```javascript
{
  id: string,
  email: string,
  full_name: string,
  hashed_password: string,
  role: "user" | "admin",
  subscription_type: "none" | "indicator" | "algorithm" | "bundle",
  subscription_status: "inactive" | "trial" | "active" | "expired",
  created_at: datetime,
  updated_at: datetime,
  last_login: datetime
}
```

### licenses
```javascript
{
  id: string,
  user_id: string,
  key: string,  // Format: METAS-XXXX-XXXX
  plan: "indicator" | "algorithm" | "bundle",
  active: boolean,
  mt5_account: string,
  machine_id: string,
  last_ping: datetime,
  created_at: datetime
}
```

### downloads
```javascript
{
  id: string,
  user_id: string,
  product_type: "indicator" | "algorithm",
  ip_address: string,
  created_at: datetime
}
```

### contacts
```javascript
{
  id: string,
  name: string,
  email: string,
  subject: string,
  message: string,
  status: "new" | "read" | "replied",
  created_at: datetime
}
```

### subscriptions
```javascript
{
  id: string,
  user_id: string,
  plan: "indicator" | "algorithm" | "bundle",
  status: "active" | "cancelled" | "expired",
  start_date: datetime,
  end_date: datetime,
  auto_renew: boolean
}
```

---

## 🧪 Testing

### Quick Test Script
```bash
# Register
curl -X POST http://localhost:8001/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{"email":"test@metas.trade","password":"test1234","full_name":"Test User"}'

# Login
curl -X POST http://localhost:8001/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email":"test@metas.trade","password":"test1234"}'

# Get Dashboard (replace TOKEN)
curl http://localhost:8001/api/dashboard/stats \
  -H "Authorization: Bearer TOKEN"
```

---

## 📝 Error Responses

### 400 Bad Request
```json
{
  "detail": "Email already registered"
}
```

### 401 Unauthorized
```json
{
  "detail": "Invalid or expired token"
}
```

### 403 Forbidden
```json
{
  "detail": "Active subscription required to download indicator"
}
```

### 429 Rate Limit
```json
{
  "detail": "Rate limit exceeded. Please try again later."
}
```

---

## 🔧 Production Deployment

### Environment Variables (Required)
```bash
MONGO_URL=mongodb://your-mongo-host:27017
DB_NAME=metas_production
JWT_SECRET=your-super-secret-key-min-32-chars
FRONTEND_URL=https://yourdomain.com
```

### Run in Production
```bash
uvicorn server:app --host 0.0.0.0 --port 8001 --workers 4
```

### Docker (Optional)
```dockerfile
FROM python:3.11-slim
WORKDIR /app
COPY requirements.txt .
RUN pip install -r requirements.txt
COPY . .
CMD ["uvicorn", "server:app", "--host", "0.0.0.0", "--port", "8001"]
```

---

## ✅ Features Implemented

- ✅ User registration & authentication
- ✅ JWT access + refresh tokens
- ✅ Password hashing with bcrypt
- ✅ Rate limiting on auth routes
- ✅ Dashboard statistics
- ✅ License generation & verification
- ✅ File downloads with access control
- ✅ Contact form handling
- ✅ Subscription management
- ✅ Admin-only routes
- ✅ MongoDB async operations
- ✅ CORS configuration
- ✅ Error handling
- ✅ Input validation

---

## 🚧 Future Enhancements

- [ ] Stripe payment integration
- [ ] Email notifications (SendGrid)
- [ ] Password reset via email
- [ ] Admin dashboard
- [ ] Usage analytics
- [ ] Webhook for license renewals
- [ ] Two-factor authentication

---

## 📞 Support

For issues or questions, contact: support@metas.trade
