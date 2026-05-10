# Cloudflare Pages Deployment Guide

## Deploying to Cloudflare Pages

This project is now simplified for Cloudflare Pages - NO special Node.js version needed!

### Prerequisites
- A GitHub/GitLab account with this repository
- A Cloudflare account (free tier works!)

---

### Method 1: Deploy via Cloudflare Dashboard (Recommended)

1. **Go to Cloudflare Pages**
   - Visit https://pages.cloudflare.com
   - Click "Create a project" → "Connect to Git"

2. **Connect your repository**
   - Select your Git provider (GitHub/GitLab)
   - Authorize Cloudflare to access your repository
   - Select this repository

3. **Configure build settings (SIMPLE!)**
   - **Project name**: Choose a name (e.g., `metas-trading`)
   - **Production branch**: `main`
   - **Framework preset**: `Create React App` (or leave blank)
   - **Build command**: `cd frontend && npm install --legacy-peer-deps && npm run build`
   - **Build output directory**: `frontend/build`
   - **Root directory**: (leave empty)

4. **Deploy!**
   - Click "Save and Deploy"
   - Wait for the build to complete (2-5 minutes)
   - Your site will be live at `https://[project-name].pages.dev`

### Method 2: Deploy via Wrangler CLI

1. **Install Wrangler**
   ```bash
   npm install -g wrangler
   ```

2. **Login to Cloudflare**
   ```bash
   wrangler login
   ```

3. **Create the project**
   ```bash
   wrangler pages project create metas-trading
   ```

4. **Deploy**
   ```bash
   cd frontend
   npm install --legacy-peer-deps
   npm run build
   cd ..
   wrangler pages deploy frontend/build --project-name=metas-trading
   ```

## Important Notes

### ✅ What's Already Configured:
- SPA routing with `_redirects` file (all routes go to index.html)
- Build process set up for Create React App
- All your custom changes preserved
- Emergent branding removed
- Button navigation fixed

### 📁 Build Output:
- The React app builds to `frontend/build/`
- Cloudflare Pages serves this directory

### 🔄 Custom Domain (Optional):
1. Go to your Cloudflare Pages project
2. Go to "Custom domains"
3. Add your domain (e.g., `metas.yourdomain.com`)
4. Follow the DNS instructions

### ⚙️ Environment Variables:
If your app needs environment variables:
1. Go to your Cloudflare Pages project
2. Go to "Settings" → "Environment variables"
3. Add variables (make sure to prefix with `REACT_APP_` for Create React App)
4. Redeploy for changes to take effect

## Troubleshooting

### Build fails?
- Make sure to use `--legacy-peer-deps` with npm install
- Check that Node.js version is compatible (Cloudflare uses Node 18 by default)

### Routes not working?
- The `_redirects` file is already in `frontend/public/`
- It should handle all SPA routing automatically

### Need to redeploy?
- Push to main branch for automatic redeployment
- Or trigger manual deploy from Cloudflare dashboard

## Your Changes Preserved:
✅ Fixed HeroSection button clickability
✅ Pricing page buttons navigate to feature pages
✅ "Made with Emergent" watermark removed
✅ All custom branding changes
✅ Page titles and meta descriptions updated
