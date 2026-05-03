# Metas MT5 Trading Platform - Backend Requirements

## Project Overview
Metas is a premium MetaTrader 5 (MT5) trading platform offering two flagship products:
1. **MT5 Premium Indicator** ($49/month) - Professional order flow indicator
2. **MT5 Premium Algorithm** ($69/month) - Automated trading system
3. **MT5 Pro Bundle** ($99/month) - Both products + premium features

## Current Frontend Pages
- Home (Hero, Live Performance, Stats, Features Grid, Testimonials, CTA)
- Features Hub
- Indicators Page (with 3D download section)
- Algorithm Page (with 3D download section)
- AI Analyst Page
- Pricing (3-tier subscription model)
- Login (UI only - needs backend)
- Sign Up (UI only - needs backend)
- Dashboard (UI only - needs backend)
- About, Contact, Partnership, Resources pages

## Backend API Requirements

### 1. Authentication & Authorization
**Endpoints:**
- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login (return JWT token)
- `POST /api/auth/logout` - User logout
- `POST /api/auth/refresh` - Refresh JWT token
- `POST /api/auth/forgot-password` - Password reset request
- `POST /api/auth/reset-password` - Reset password with token
- `GET /api/auth/me` - Get current user info

**User Schema:**
```javascript
{
  id: string,
  email: string,
  password: string (hashed with bcrypt),
  fullName: string,
  subscriptionType: 'none' | 'indicator' | 'algorithm' | 'bundle',
  subscriptionStatus: 'active' | 'trial' | 'cancelled' | 'expired',
  trialEndDate: Date,
  subscriptionStartDate: Date,
  stripeCustomerId: string,
  stripeSubscriptionId: string,
  downloadCount: number,
  createdAt: Date,
  updatedAt: Date
}
```

### 2. Subscription Management
**Endpoints:**
- `POST /api/subscriptions/create` - Create new subscription
- `GET /api/subscriptions/my-subscription` - Get user's subscription details
- `PUT /api/subscriptions/cancel` - Cancel subscription
- `PUT /api/subscriptions/upgrade` - Upgrade subscription plan
- `GET /api/subscriptions/payment-history` - Get payment history

**Subscription Schema:**
```javascript
{
  id: string,
  userId: string,
  plan: 'indicator' | 'algorithm' | 'bundle',
  status: 'active' | 'trial' | 'cancelled' | 'expired',
  amount: number,
  currency: 'USD',
  startDate: Date,
  endDate: Date,
  trialEndDate: Date,
  autoRenew: boolean,
  stripeSubscriptionId: string,
  createdAt: Date,
  updatedAt: Date
}
```

### 3. Product Downloads
**Endpoints:**
- `GET /api/downloads/indicator` - Download MT5 Indicator (requires active subscription)
- `GET /api/downloads/algorithm` - Download MT5 Algorithm (requires active subscription)
- `POST /api/downloads/generate-license` - Generate license key
- `GET /api/downloads/history` - Get user's download history

**Download Schema:**
```javascript
{
  id: string,
  userId: string,
  productType: 'indicator' | 'algorithm',
  downloadDate: Date,
  licenseKey: string,
  ipAddress: string,
  userAgent: string
}
```

### 4. Payment Processing (Stripe Integration)
**Endpoints:**
- `POST /api/payments/create-checkout-session` - Create Stripe checkout session
- `POST /api/payments/webhook` - Stripe webhook for payment events
- `GET /api/payments/portal` - Get Stripe customer portal URL
- `POST /api/payments/verify-payment` - Verify payment status

**Payment Schema:**
```javascript
{
  id: string,
  userId: string,
  subscriptionId: string,
  amount: number,
  currency: 'USD',
  status: 'pending' | 'completed' | 'failed' | 'refunded',
  stripePaymentId: string,
  stripeInvoiceId: string,
  paymentDate: Date,
  metadata: object
}
```

### 5. Contact Form
**Endpoints:**
- `POST /api/contact/submit` - Submit contact form
- `GET /api/contact/messages` (Admin only) - Get all messages

**Contact Schema:**
```javascript
{
  id: string,
  name: string,
  email: string,
  subject: string,
  message: string,
  status: 'new' | 'read' | 'replied',
  createdAt: Date
}
```

### 6. Dashboard Data
**Endpoints:**
- `GET /api/dashboard/stats` - Get user dashboard statistics
- `GET /api/dashboard/activity` - Get recent activity

**Response:**
```javascript
{
  subscription: {
    plan: string,
    status: string,
    daysRemaining: number,
    nextBillingDate: Date
  },
  downloads: {
    total: number,
    thisMonth: number
  },
  account: {
    memberSince: Date,
    lastLogin: Date
  }
}
```

### 7. Admin Endpoints (Optional)
**Endpoints:**
- `GET /api/admin/users` - Get all users
- `GET /api/admin/subscriptions` - Get all subscriptions
- `GET /api/admin/analytics` - Get platform analytics
- `PUT /api/admin/users/:id/subscription` - Update user subscription

## Technical Stack
- **Backend Framework**: FastAPI (Python)
- **Database**: MongoDB
- **Authentication**: JWT tokens
- **Payment Processing**: Stripe
- **File Storage**: Local storage or S3
- **Email**: SendGrid or similar

## Security Requirements
- Password hashing with bcrypt
- JWT token expiration (15 min access, 7 days refresh)
- Rate limiting on auth endpoints
- Input validation and sanitization
- CORS configuration for frontend domain
- Secure file downloads (signed URLs)
- Stripe webhook signature verification

## Environment Variables Needed
```
# MongoDB
MONGO_URL=mongodb://localhost:27017/metas
DB_NAME=metas

# JWT
JWT_SECRET=your-secret-key
JWT_ACCESS_TOKEN_EXPIRE_MINUTES=15
JWT_REFRESH_TOKEN_EXPIRE_DAYS=7

# Stripe
STRIPE_PUBLIC_KEY=pk_test_...
STRIPE_SECRET_KEY=sk_test_...
STRIPE_WEBHOOK_SECRET=whsec_...

# Email
SENDGRID_API_KEY=your-key
FROM_EMAIL=support@metas.trade

# App
FRONTEND_URL=https://your-domain.com
BACKEND_URL=https://api.your-domain.com

# File Storage
DOWNLOAD_FILES_PATH=/app/backend/downloads
```

## File Structure
```
/app/backend/
├── server.py (main FastAPI app)
├── routes/
│   ├── auth.py
│   ├── subscriptions.py
│   ├── downloads.py
│   ├── payments.py
│   ├── contact.py
│   └── dashboard.py
├── models/
│   ├── user.py
│   ├── subscription.py
│   ├── payment.py
│   ├── download.py
│   └── contact.py
├── services/
│   ├── auth_service.py
│   ├── stripe_service.py
│   ├── email_service.py
│   └── file_service.py
├── middleware/
│   ├── auth_middleware.py
│   └── rate_limiter.py
├── utils/
│   ├── jwt_handler.py
│   ├── password_hasher.py
│   └── validators.py
├── downloads/ (MT5 files)
│   ├── indicator/
│   └── algorithm/
└── requirements.txt
```

## User Flow Examples

### Registration & Trial Flow:
1. User fills Sign Up form
2. POST /api/auth/register → Create user with 'trial' status
3. User receives welcome email with trial info (14 days)
4. Redirect to Dashboard
5. User can download products during trial

### Subscription Purchase Flow:
1. User selects plan on Pricing page
2. Click "Download for MT5" → Check if logged in
3. If not logged in → redirect to /login or /signup
4. If logged in → POST /api/payments/create-checkout-session
5. Redirect to Stripe checkout
6. After payment → Stripe webhook updates subscription
7. User redirected to Dashboard
8. User can now download products

### Download Flow:
1. User clicks "Download for MT5" on Dashboard
2. GET /api/downloads/indicator (with JWT token)
3. Backend checks subscription status
4. If active → generate download URL & license key
5. Log download in database
6. Return file or signed URL

## Testing Requirements
- Unit tests for all services
- Integration tests for API endpoints
- Test Stripe webhook events
- Test JWT token expiration
- Test subscription lifecycle (trial → active → expired)
