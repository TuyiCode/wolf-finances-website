# 🚀 GitHub Setup Guide for Wolf Finances

## ✅ **What's Already Done:**
- ✅ Git repository initialized
- ✅ All files committed
- ✅ GitHub Actions workflow created
- ✅ Deployment script ready

## 📋 **Next Steps:**

### **Step 1: Create GitHub Repository**
1. Go to [github.com](https://github.com)
2. Click "New repository"
3. Repository name: `wolf-finances-website`
4. Make it **Public** (free)
5. **Don't** initialize with README (we have files)
6. Click "Create repository"

### **Step 2: Connect to GitHub**
After creating the repo, GitHub will show you commands. Run these:

```bash
# Add GitHub as remote origin
git remote add origin https://github.com/YOUR_USERNAME/wolf-finances-website.git

# Push your code to GitHub
git branch -M main
git push -u origin main
```

### **Step 3: Get Hostinger FTP Details**
1. Go to Hostinger Control Panel
2. Click "Files" → "FTP Accounts"
3. Note down:
   - **FTP Server** (e.g., `srv123.hstgr.io`)
   - **Username** (your Hostinger username)
   - **Password** (your FTP password)

### **Step 4: Add Secrets to GitHub**
1. Go to your GitHub repository
2. Click "Settings" → "Secrets and variables" → "Actions"
3. Click "New repository secret"
4. Add these 3 secrets:
   - **Name:** `FTP_SERVER` | **Value:** Your FTP server
   - **Name:** `FTP_USERNAME` | **Value:** Your Hostinger username
   - **Name:** `FTP_PASSWORD` | **Value:** Your FTP password

### **Step 5: Test Deployment**
1. Make a small change to any file
2. Commit and push:
   ```bash
   git add .
   git commit -m "Test deployment"
   git push
   ```
3. Go to GitHub → "Actions" tab
4. Watch the deployment run automatically!

## 🔄 **Your New Workflow:**

### **Every time you make changes:**
1. **Edit files in Cursor AI**
2. **Save your changes**
3. **Commit and push:**
   ```bash
   git add .
   git commit -m "Description of changes"
   git push
   ```
4. **GitHub automatically deploys to Hostinger**
5. **Changes appear on your website in 2-3 minutes!**

## 🎯 **Benefits of This Setup:**
- ✅ **Free hosting** on GitHub
- ✅ **Automatic deployment** to Hostinger
- ✅ **Version control** for all changes
- ✅ **Backup** of your website
- ✅ **Collaboration** ready
- ✅ **Professional workflow**

## 📱 **GitHub Pages Bonus:**
You can also host your website directly on GitHub Pages for free:
- Go to repository Settings → Pages
- Source: Deploy from a branch
- Branch: main
- Folder: / (root)
- Your site will be available at: `https://YOUR_USERNAME.github.io/wolf-finances-website`

---
**Ready to set up your GitHub repository?** 🚀 