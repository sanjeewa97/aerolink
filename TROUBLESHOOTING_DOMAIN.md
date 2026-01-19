# Troubleshooting: Custom Domain Shows "Site Not Found"

## ✅ Current Status:
- Your site is **deployed and working** at: https://aerolink-8a555.web.app
- DNS records are **verified and live** globally
- Custom domain shows **"Site Not Found"** error

## 🔍 What to Check in Firebase Console:

### Step 1: Open Firebase Hosting
Go to: https://console.firebase.google.com/project/aerolink-8a555/hosting/sites

### Step 2: Check Domain Status
Look for `travexasolutions.com` in the domains list. The status might show:

- **"Connected"** ✅ - Should work, but may need cache clear
- **"Pending"** ⏳ - Wait 5-30 minutes, then refresh
- **"Needs setup"** ❌ - Click to complete setup
- **"Failed"** ❌ - May need to remove and re-add domain

### Step 3: Common Fixes

#### Fix 1: Complete Setup
If there's a "Finish" or "Complete setup" button → Click it

#### Fix 2: Wait for Routing
If status is "Connected" but site not loading:
- Clear browser cache (Ctrl+Shift+Delete)
- Try incognito mode
- Wait 10-30 minutes for global routing

#### Fix 3: Remove & Re-add Domain
If status is stuck or failed:
1. Click the ⋮ menu next to domain
2. Select "Delete"
3. Wait 2 minutes
4. Add domain again
5. Follow verification steps

#### Fix 4: Check `www` Redirect
Make sure you added the domain as:
- `travexasolutions.com` (root domain)
- NOT `www.travexasolutions.com`

Firebase should auto-redirect www → non-www

## 🎯 Expected Result:
Once properly connected, both URLs should work:
- http://travexasolutions.com → Redirects to https://
- https://travexasolutions.com → Shows your AeroLink site ✅

## 📸 Next Step:
Take a screenshot of your Firebase Hosting domains page and share it for specific diagnosis.
