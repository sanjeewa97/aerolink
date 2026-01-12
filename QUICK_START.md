# 🎯 Quick Start - Deploy Now!

Your AeroLink website is **ready to deploy** to travexasolutions.com! 

## ✅ What I've Done For You:

1. ✅ Created `firebase.json` - Firebase hosting configuration
2. ✅ Created `.firebaserc` - Firebase project settings
3. ✅ Built your application successfully - `dist` folder ready!
4. ✅ Created complete deployment guide

---

## 🚀 Next Steps (You need to do these):

### 1. Install Firebase CLI (One time only)
```bash
npm install -g firebase-tools
```

### 2. Login to Firebase
```bash
firebase login
```
- This opens your browser
- Login with your Google account

### 3. Update Project ID

You need to update `.firebaserc` with your actual Firebase project ID:

- Go to https://console.firebase.google.com
- Create a new project OR select existing
- Copy your project ID
- Edit `.firebaserc` and replace `"your-firebase-project-id"` with your actual ID

Example:
```json
{
  "projects": {
    "default": "aerolink-12345"
  }
}
```

### 4. Deploy!
```bash
firebase deploy --only hosting
```

**Your site will be live at:** `https://your-project-id.web.app`

---

## 🌐 Connect travexasolutions.com Domain

### In Firebase Console:
1. Go to **Hosting** → **Add custom domain**
2. Enter: `travexasolutions.com`
3. Copy the DNS records shown

### In Namecheap:
1. Login to Namecheap.com
2. Go to **Domain List** → **Manage** → **Advanced DNS**
3. **Delete old A/CNAME records for @ and www**
4. Add these records (get exact values from Firebase):

```
A Record:     @ → 151.101.1.195
A Record:     @ → 151.101.65.195
CNAME Record: www → travexasolutions.com
TXT Record:   @ → [verification code from Firebase]
```

5. Save and wait 5-60 minutes for DNS propagation
6. Verify in Firebase Console - SSL auto-provisions!

---

## 📝 Full Details

See `DEPLOYMENT_GUIDE.md` for complete instructions, troubleshooting, and advanced options.

---

**Need help?** The build is ready - just run the commands above! 🎉
