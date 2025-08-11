# 🚀 Resend API Setup for Contact Form

## ✅ **What's Already Done:**
- Contact form simplified to 3 fields (Name, Email, Message)
- Frontend updated to use `/api/send-email` endpoint
- API route created with Resend integration
- Professional email template with HTML formatting

## 🔧 **Setup Steps:**

### **Step 1: Get Resend API Key**
1. Go to [resend.com](https://resend.com)
2. Sign up for free account
3. Go to API Keys section
4. Create new API key
5. Copy the API key (starts with `re_`)

### **Step 2: Create Environment File**
Create `.env.local` in your project root:
```env
RESEND_API_KEY=re_your_actual_api_key_here
```

### **Step 3: Update Email Settings**
Edit `src/app/api/send-email/route.ts`:

**Change this line:**
```typescript
from: 'Portfolio Contact <noreply@yourdomain.com>'
```
**To your actual domain or use:**
```typescript
from: 'Portfolio Contact <onboarding@resend.dev>'
```

**Change this line:**
```typescript
to: ['your-email@gmail.com']
```
**To your actual email:**
```typescript
to: ['sreesadhan.polimera11@gmail.com']
```

### **Step 4: Test the Form**
1. Start your Next.js app: `npm run dev`
2. Go to Contact section
3. Fill out the form
4. Submit and check your email

## 🎯 **How It Works:**

1. **User fills form** → Name, Email, Message
2. **Frontend sends** → POST to `/api/send-email`
3. **API validates** → Checks required fields
4. **Resend API** → Sends professional email
5. **You receive** → Beautiful formatted email

## 📧 **Email Template Features:**

- **Professional HTML design**
- **Contact details clearly formatted**
- **Message content highlighted**
- **Timestamp included**
- **Fallback text version**

## 🚨 **Important Notes:**

- **Free tier**: 3,000 emails/month
- **No backend needed** - everything runs on Vercel/Netlify
- **Secure** - API key stored in environment variables
- **Professional** - Beautiful email formatting

## 🔍 **Troubleshooting:**

**If emails don't send:**
1. Check browser console for errors
2. Verify API key in `.env.local`
3. Check Resend dashboard for delivery status
4. Ensure environment variables are loaded

**For production:**
1. Deploy to Vercel/Netlify
2. Add environment variables in deployment settings
3. Update `from` email to your domain

## 🎉 **You're All Set!**

Your contact form now:
- ✅ Has only 3 simple fields
- ✅ Uses professional Resend API
- ✅ Sends beautiful formatted emails
- ✅ No backend maintenance needed
- ✅ Works on any hosting platform

**Next: Just get your Resend API key and update the email addresses!**
