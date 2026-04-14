# Metas - Trading Platform Clone

## Overview
A pixel-perfect replica of ATAS.net trading platform with "Metas" branding. This is a frontend-only implementation showcasing a professional trading software platform.

**Tagline:** "Trade Smarter. Execute Faster."

## Tech Stack
- **React** - Component-based UI
- **Tailwind CSS** - Styling & responsive design
- **Framer Motion** - Smooth animations & scroll effects
- **React Router** - Multi-page navigation
- **Lucide React** - Professional icons

## Pages Implemented

### 1. Home (`/`)
- **Hero Section**: Animated floating bars, vertical feature list, trading UI preview
- **Stats Section**: 4-column layout with gradient numbers on light background
- **Analyze Section**: Split layout with text + trading desk visual
- **Feature Grid**: 3 feature cards with hover glow effects
- **Testimonials**: User reviews with ratings
- **Press Section**: Major publication logos
- **CTA Section**: Animated vertical bars effect with social links

### 2. Features Hub (`/features`)
- Grid of main feature categories
- Cards with hover effects and navigation

### 3. Feature Detail Pages (`/features/:slug`)
- Charts & Clusters
- Indicators
- Trading Interface
- Liquidity Analysis

### 4. Pricing (`/pricing`)
- Two pricing tiers (Pro $29, Elite $59)
- Feature comparison table
- Highlighted "Most Popular" plan

### 5. Login (`/login`)
- Glass morphism UI
- Email/password inputs
- Google login option

### 6. Dashboard (`/dashboard`)
- Sidebar navigation
- Subscription info cards
- License key display
- Download table for different platforms

### 7. About (`/about`)
- Company story
- Core values with icon cards

### 8. Contact (`/contact`)
- Contact form
- Contact information cards
- Support resources

## Design System

### Colors
**Dark Theme:**
- Background: `#0B0F1A`
- Secondary: `#0F172A`
- Dark purple accent: `#1a1147`

**Accents:**
- Purple: `#7C3AED`
- Cyan: `#00D4FF`
- Pink: `#ec4899`

**Text:**
- Primary: `#E5E7EB`
- Secondary: `#9CA3AF`

**Light Sections:**
- Background: `#F8FAFC` to `#E5E7EB` gradient

### Animation System (Framer Motion)
**Scroll Animations:**
- Initial: `opacity: 0, y: 40`
- Animate: `opacity: 1, y: 0`
- Duration: `0.6s`

**Hover Effects:**
- Translate: `translateY(-6px)`
- Glow shadow appears
- Scale: `1.03`

**Floating Bars:**
- Horizontal bars on hero left side
- Vertical bars in CTA footer
- Smooth infinite animations
- Colors: purple, cyan, pink

### Key Features Matching ATAS.net

1. **Exact Layout Structure**
   - Hero with left content + right trading UI
   - Vertical feature list with active state
   - Stats section on light background
   - Alternating content sections

2. **Spacing Density**
   - Section padding: 100px vertical
   - Grid gaps: 24-32px
   - Max width: 1280px

3. **Glass Morphism**
   - Background: `rgba(255,255,255,0.05)`
   - Border: `rgba(255,255,255,0.1)`
   - Backdrop blur effects

4. **Professional Trading UI**
   - Footprint charts theme
   - Order flow visualizations
   - Dark professional aesthetic
   - Data-driven design language

## Data Status
🔸 **All data is currently MOCKED** for demonstration purposes:
- Testimonials are sample data
- Press logos are text representations
- Trading UI visuals are gradient placeholders
- Stats and numbers are illustrative

## Current Limitations
- Frontend-only (no backend integration)
- Mock data for all content
- Trading UI visuals are placeholders (not actual charts)
- Forms don't submit to backend
- Downloads are non-functional

## Future Enhancements (if backend is needed)
- User authentication system
- Real trading data integration
- Actual chart/footprint visualizations
- User dashboard with real subscription data
- Form submissions with email notifications
- Download file hosting

## Navigation
All pages are accessible via:
- Navbar links
- Footer links
- Direct URL navigation
- Internal page links

## Animations
- Smooth page transitions
- Scroll-triggered animations
- Hover effects on all interactive elements
- Floating bar animations (hero + CTA)
- Button glow effects

---

**Note:** This is a structural and visual replication of ATAS.net with Metas branding. The design follows ATAS patterns exactly while maintaining brand independence.
