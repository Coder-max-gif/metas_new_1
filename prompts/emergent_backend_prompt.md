# PROMPT FOR EMERGENT AI - Backend Implementation

## Context

I have a fully functional React frontend for "Metas" - a MetaTrader 5 (MT5) trading platform that sells premium trading tools via subscriptions. The frontend is complete with beautiful UI, 3D animations, and all pages built. Now I need you to implement the complete backend.

## Project Details

**Website**: Metas - MT5 Trading Platform
**Frontend**: React (already complete and working)
**Backend Stack**: FastAPI + MongoDB (currently minimal/default setup)
**Products**: 
- MT5 Premium Indicator ($49/month)
- MT5 Premium Algorithm ($69/month)  
- MT5 Pro Bundle ($99/month - both products)

## What Already Exists

✅ **Frontend (100% complete):**
- Home page with hero, stats, live Twitch stream, features grid
- Indicators page with 3D product showcase
- Algorithm page with 3D product showcase
- Pricing page with 3-tier subscription model
- Sign Up page (UI only - needs backend)
- Login page (UI only - needs backend)
- Dashboard page (UI only - needs backend)
- Contact page (needs backend)
- All navigation and buttons working

✅ **Backend (minimal):**
- FastAPI server.py with basic setup
- MongoDB connection configured
- Backend runs on port 8001
- CORS configured for frontend

## What You Need to Build

### Phase 1: Authentication System (PRIORITY 1)

**Requirements:**
1. User registration with email validation
2. Login with JWT token authentication
3. Password hashing with bcrypt
4. Refresh token mechanism
5. "Forgot Password" flow with email
6. "Reset Password" functionality
7. JWT middleware for protected routes

**API Endpoints:**
```
POST /api/auth/register
POST /api/auth/login
POST /api/auth/logout
POST /api/auth/refresh-token
POST /api/auth/forgot-password
POST /api/auth/reset-password
GET /api/auth/me (get current user)
```

**User Model:**
```javascript
{
  id: string,
  email: string (unique),
  password: string (hashed),
  fullName: string,
  subscriptionType: 'none' | 'indicator' | 'algorithm' | 'bundle',
  subscriptionStatus: 'trial' | 'active' | 'cancelled' | 'expired',
  trialEndDate: Date,
  subscriptionStartDate: Date,
  stripeCustomerId: string,
  stripeSubscriptionId: string,
  createdAt: Date,
  updatedAt: Date
}
```

**Auth Flow:**
1. User signs up → Create account with 'trial' status (14 days free)
2. User logs in → Return JWT access token (15 min) + refresh token (7 days)
3. Frontend stores JWT in localStorage
4. Protected routes verify JWT via middleware
5. Expired tokens → Use refresh token to get new access token

### Phase 2: Stripe Payment Integration (PRIORITY 2)

**Requirements:**
1. Stripe subscription setup for 3 pricing tiers
2. Checkout session creation
3. Webhook handling for payment events
4. Subscription management (cancel, upgrade, downgrade)
5. Customer portal integration
6. Payment history tracking

**API Endpoints:**
```
POST /api/payments/create-checkout-session
POST /api/payments/webhook (Stripe webhook)
GET /api/payments/portal (Stripe customer portal)
GET /api/payments/history
PUT /api/subscriptions/cancel
PUT /api/subscriptions/upgrade
```

**Subscription Model:**
```javascript
{
  id: string,
  userId: string,
  plan: 'indicator' | 'algorithm' | 'bundle',
  status: 'trial' | 'active' | 'cancelled' | 'expired',
  amount: number,
  startDate: Date,
  endDate: Date,
  trialEndDate: Date,
  autoRenew: boolean,
  stripeSubscriptionId: string,
  stripeCustomerId: string
}
```

**Payment Flow:**
1. User selects plan on Pricing page → Click "Download for MT5"
2. If not logged in → Redirect to /signup or /login
3. If on trial → Allow access, prompt to upgrade before trial ends
4. If no subscription → Create Stripe checkout session
5. Redirect to Stripe → User pays
6. Stripe webhook → Update user subscription status to 'active'
7. Redirect to Dashboard with success message

### Phase 3: Dashboard & File Downloads (PRIORITY 3)

**Requirements:**
1. User dashboard showing subscription details
2. Secure file download system for MT5 files
3. License key generation for each product
4. Download tracking and analytics
5. Account settings management

**API Endpoints:**
```
GET /api/dashboard/stats
GET /api/dashboard/activity
GET /api/downloads/indicator (requires active subscription)
GET /api/downloads/algorithm (requires active subscription)
POST /api/downloads/generate-license
GET /api/downloads/history
PUT /api/user/profile
```

**Dashboard Response:**
```javascript
{
  subscription: {
    plan: string,
    status: string,
    daysRemaining: number,
    nextBillingDate: Date,
    canDownload: boolean
  },
  downloads: {
    total: number,
    history: [{productType, date, licenseKey}]
  },
  account: {
    email: string,
    fullName: string,
    memberSince: Date
  }
}
```

**Download Flow:**
1. User goes to Dashboard → Sees subscription status
2. Clicks "Download MT5 Indicator" or "Download MT5 Algorithm"
3. Backend checks: Is subscription active or trial not expired?
4. If yes → Generate license key, log download, return file or signed URL
5. If no → Return error: "Subscription required" or "Trial expired"

### Phase 4: Contact Form (PRIORITY 4)

**Requirements:**
1. Contact form submission handling
2. Email notification to admin
3. Store messages in database

**API Endpoints:**
```
POST /api/contact/submit
```

**Contact Model:**
```javascript
{
  id: string,
  name: string,
  email: string,
  subject: string,
  message: string,
  status: 'new',
  createdAt: Date
}
```

## Technical Requirements

### Security:
- ✅ Password hashing with bcrypt (salt rounds: 10)
- ✅ JWT tokens with secret from environment variable
- ✅ Input validation on all endpoints (email format, password strength)
- ✅ Rate limiting on auth endpoints (max 5 login attempts per 15 min)
- ✅ CORS restricted to frontend domain
- ✅ Stripe webhook signature verification
- ✅ Secure file downloads (prevent direct access)

### File Structure:
```
/app/backend/
├── server.py (main app)
├── routes/
│   ├── auth.py
│   ├── payments.py
│   ├── downloads.py
│   ├── dashboard.py
│   └── contact.py
├── models/
│   ├── user.py
│   ├── subscription.py
│   ├── payment.py
│   └── contact.py
├── services/
│   ├── auth_service.py
│   ├── stripe_service.py
│   └── email_service.py
├── middleware/
│   └── auth_middleware.py
├── utils/
│   ├── jwt_handler.py
│   └── validators.py
├── downloads/
│   ├── indicator/
│   │   └── mt5_indicator.ex5 (dummy file for now)
│   └── algorithm/
│       └── mt5_algorithm.ex5 (dummy file for now)
└── requirements.txt
```

### Environment Variables:
```
JWT_SECRET=your-secret-key
JWT_ACCESS_TOKEN_EXPIRE_MINUTES=15
JWT_REFRESH_TOKEN_EXPIRE_DAYS=7
STRIPE_SECRET_KEY=sk_test_... (use Emergent's Stripe test key if available)
STRIPE_WEBHOOK_SECRET=whsec_...
SENDGRID_API_KEY=your-key (optional for now, can mock emails)
FROM_EMAIL=support@metas.trade
FRONTEND_URL=http://localhost:3000
```

### Database Collections:
1. `users` - User accounts
2. `subscriptions` - User subscriptions
3. `payments` - Payment history
4. `downloads` - Download logs
5. `contacts` - Contact form submissions

## Integration Instructions

### Frontend Integration Points:

**1. Sign Up Page (`/app/frontend/src/pages/SignUp.jsx`):**
- Update form submission to POST /api/auth/register
- Handle success → Auto-login → Redirect to /dashboard
- Handle errors → Display validation messages

**2. Login Page (`/app/frontend/src/pages/Login.jsx`):**
- Update form submission to POST /api/auth/login
- Store JWT token in localStorage
- Redirect to /dashboard on success

**3. Dashboard Page (`/app/frontend/src/pages/Dashboard.jsx`):**
- Fetch data from GET /api/dashboard/stats
- Display subscription info, download buttons
- Show download history
- Add "Manage Subscription" button → Stripe portal

**4. Pricing Page (`/app/frontend/src/pages/Pricing.jsx`):**
- "Download for MT5" buttons → Check auth
- If authenticated → POST /api/payments/create-checkout-session
- If not authenticated → Redirect to /signup

**5. Contact Page (`/app/frontend/src/pages/Contact.jsx`):**
- Form submission → POST /api/contact/submit
- Show success message after submission

**6. Protected Routes:**
- Add auth check on Dashboard route
- Redirect to /login if not authenticated
- Use JWT from localStorage for API calls

### API Request Headers:
```javascript
{
  'Content-Type': 'application/json',
  'Authorization': 'Bearer <JWT_TOKEN>'
}
```

## Testing Checklist

After implementation, please test:

✅ **Auth Flow:**
1. Register new user → Should create account with trial status
2. Login → Should return JWT token
3. Access protected route without token → Should return 401
4. Token expiration → Should require refresh

✅ **Payment Flow:**
1. Select plan → Create checkout session
2. Complete payment (Stripe test mode)
3. Webhook updates subscription → User can download

✅ **Download Flow:**
1. Active subscription → Can download files
2. Expired subscription → Cannot download
3. Trial user → Can download
4. License key generated for each download

✅ **Dashboard:**
1. Shows correct subscription status
2. Displays remaining trial days
3. Shows payment history
4. Download history visible

## Important Notes

1. **Use Integration Playbook Expert** for:
   - JWT authentication setup
   - Stripe integration (use Stripe test keys)
   - Email service integration (SendGrid or similar)

2. **Testing:**
   - Use testing agent after each phase
   - Test all auth flows thoroughly
   - Test payment webhooks with Stripe CLI

3. **File Security:**
   - MT5 files should not be directly accessible via URL
   - Use signed URLs or token-based downloads
   - Log all download attempts

4. **User Experience:**
   - Clear error messages for failed payments
   - Email confirmations for registration, subscription, downloads
   - Trial expiration reminders (3 days before, 1 day before)

## Deliverables

Please implement:
1. ✅ Complete authentication system with JWT
2. ✅ Stripe payment integration with webhooks
3. ✅ Dashboard API with subscription management
4. ✅ File download system with license keys
5. ✅ Contact form handling
6. ✅ All necessary database models
7. ✅ Middleware for auth protection
8. ✅ Input validation on all endpoints
9. ✅ Error handling and logging
10. ✅ Testing of all flows

After completing each phase, please update `/app/backend/contracts.md` with actual implementation details and test the integration with frontend.

Start with Phase 1 (Authentication) and proceed sequentially. Use the integration playbook expert for any third-party services.

Thank you!
