# 🚀 AeroLink Deployment Guide - travexasolutions.com

## Firebase Hosting Setup

### Prerequisites
- Firebase account (create at https://console.firebase.google.com)
- Firebase CLI installed globally

---

## Step-by-Step Deployment

### 1. Install Firebase Tools (One-time setup)
```bash
npm install -g firebase-tools
```

### 2. Login to Firebase
```bash
firebase login
```
This will open a browser window - login with your Google account.

### 3. Create/Select Firebase Project

**Option A: Create a new project**
```bash
firebase projects:create aerolink-travel
```

**Option B: Use existing project**
- Go to https://console.firebase.google.com
- Note your project ID
- Update `.firebaserc` file with your project ID:
  ```json
  {
    "projects": {
      "default": "your-actual-project-id"
    }
  }
  ```

### 4. Initialize Firebase Hosting (Already configured)
The project is already configured with:
- `firebase.json` - hosting configuration
- `.firebaserc` - project settings

### 5. Build Your Application
```bash
npm run build
```
This creates the `dist` folder with optimized production files.

### 6. Deploy to Firebase
```bash
firebase deploy --only hosting
```

Your site will be live at: `https://your-project-id.web.app`

---

## Connect Custom Domain (travexasolutions.com)

### In Firebase Console:

1. Go to https://console.firebase.google.com
2. Select your project
3. Navigate to **Hosting** → **Add custom domain**
4. Enter: `travexasolutions.com`
5. Firebase will show DNS records to add

### In Namecheap (DNS Configuration):

1. Login to Namecheap.com
2. Go to **Domain List** → **Manage** (next to travexasolutions.com)
3. Click **Advanced DNS** tab
4. **Delete any existing A or CNAME records for @ and www**
5. Add these new records (values from Firebase):

```
Type: A Record
Host: @
Value: 151.101.1.195
TTL: Automatic

Type: A Record  
Host: @
Value: 151.101.65.195
TTL: Automatic

Type: CNAME Record
Host: www
Value: travexasolutions.com
TTL: Automatic

Type: TXT Record (for verification)
Host: @
Value: [copy from Firebase console]
TTL: Automatic
```

6. **Save all changes**

### Verification (in Firebase Console):

- Wait 5-60 minutes for DNS propagation
- Click "Verify" in Firebase Console
- Once verified, SSL certificate will be auto-provisioned
- Your site will be live at **https://travexasolutions.com** 🎉

---

## Quick Commands Reference

```bash
# Build the app
npm run build

# Test locally first
npm run preview

# Deploy to Firebase
firebase deploy

# View deployment logs
firebase hosting:channel:list

# Rollback if needed
firebase hosting:clone SOURCE_SITE_ID:SOURCE_CHANNEL_ID DEST_SITE_ID:live
```

---

## Troubleshooting

**Issue: "Permission denied"**
- Run: `firebase login --reauth`

**Issue: "No Firebase project"**
- Update `.firebaserc` with correct project ID

**Issue: DNS not propagating**
- Wait up to 48 hours (usually 1-6 hours)
- Check with: https://dnschecker.org

**Issue: SSL certificate pending**
- Wait 24 hours after DNS verification
- Firebase auto-provisions Let's Encrypt SSL

---

## Environment Variables

If you need environment variables in production:

1. Create `.env.production` file
2. Add variables with `VITE_` prefix:
   ```
   VITE_API_URL=https://api.travexasolutions.com
   VITE_FIREBASE_API_KEY=your-key-here
   ```
3. Access in code: `import.meta.env.VITE_API_URL`
4. Rebuild: `npm run build`

---

## Automated Deployment (GitHub Actions)

Want automatic deploys when you push to GitHub?

1. Generate Firebase token:
   ```bash
   firebase login:ci
   ```

2. Add token to GitHub Secrets (Settings → Secrets → Actions)
   - Name: `FIREBASE_TOKEN`
   - Value: [token from step 1]

3. I can create a GitHub Actions workflow file if you want!

---

**Need help?** Contact Firebase support or check:
- Firebase Documentation: https://firebase.google.com/docs/hosting
- Vite Documentation: https://vitejs.dev/guide/build.html
