# Registration System Setup Guide

## Overview

The registration system has been updated with the following features:

✅ **Registration Form** - Collects: Name, Email, Designation, Department, Contact Number
✅ **Duplicate Check** - Prevents same email from registering twice
✅ **Thank You Page** - Opens in a new tab after successful registration
✅ **Email Confirmations** - Sends emails to both user and admin
✅ **Registration Storage** - Stores all registrations in `registrations.json`

---

## Setup Instructions

### 1. Install Dependencies

```bash
npm install
```

This will install all required packages including:
- `express` - Backend server
- `nodemailer` - Email sending
- `cors` - Cross-origin requests
- `dotenv` - Environment variables
- `concurrently` - Run both servers together

---

### 2. Configure Email Service

#### Option A: Using Gmail (Recommended)

1. **Create a Gmail account** or use your existing one
2. **Enable 2-Factor Authentication** on your Google account
3. **Generate an App Password**:
   - Go to [myaccount.google.com/apppasswords](https://myaccount.google.com/apppasswords)
   - Select "Mail" and "Windows Computer"
   - Google will generate a 16-character password
4. **Create `.env` file** in the root directory:

```env
# Email Configuration
EMAIL_SERVICE=gmail
EMAIL_USER=your-email@gmail.com
EMAIL_PASSWORD=your-16-char-app-password
ADMIN_EMAIL=admin@yourdomain.com

# Server
PORT=5000
```

#### Option B: Using Other Email Providers

For providers like SendGrid, Outlook, Yahoo, etc., update the configuration:

```env
EMAIL_SERVICE=outlook  # or yahoo, sendgrid, etc.
EMAIL_USER=your-email@outlook.com
EMAIL_PASSWORD=your-password
ADMIN_EMAIL=admin@yourdomain.com
PORT=5000
```

---

### 3. Environment Variables (`.env` file)

**IMPORTANT:** Create a `.env` file in the project root. Never commit this file to version control.

```env
EMAIL_SERVICE=gmail
EMAIL_USER=your-email@gmail.com
EMAIL_PASSWORD=your-app-password
ADMIN_EMAIL=admin@futurewithmensagam.com
PORT=5000
```

An example file `.env.example` is provided in the project.

---

## Running the Application

### Development Mode (Both Frontend and Backend)

```bash
npm run dev:full
```

This command runs both the Vite development server and the backend Express server concurrently.

Or run them separately in different terminals:

**Terminal 1 - Backend:**
```bash
npm run server
```

**Terminal 2 - Frontend:**
```bash
npm run dev
```

### Production Build

```bash
npm run build
```

---

## How It Works

### 1. Registration Form
- User fills out form with: Name, Email, Designation, Department, Contact
- Form validates all required fields
- Sends POST request to `/api/register`

### 2. Backend Processing
- **Duplicate Check**: Searches `registrations.json` for existing email
- **If Duplicate**: Returns 409 status with "You're already registered" message
- **If New**: Saves registration and sends emails

### 3. Email Sending
- **User Email**: Confirmation with registration details
- **Admin Email**: Notification with all user details
- Both emails are sent from the configured email address

### 4. Thank You Page
- Opens in a new browser tab after successful registration
- Shows confirmation message with user's email
- Displays date/time of workshop
- Allows user to go back home or close tab

---

## API Endpoints

### POST `/api/register`

**Request Body:**
```json
{
  "name": "John Doe",
  "email": "john@college.com",
  "designation": "Student",
  "department": "Computer Science",
  "contact": "+91-9876543210"
}
```

**Success Response (201):**
```json
{
  "message": "Registration successful! Confirmation emails sent.",
  "data": {
    "name": "John Doe",
    "email": "john@college.com",
    "designation": "Student",
    "department": "Computer Science",
    "contact": "+91-9876543210"
  }
}
```

**Duplicate Response (409):**
```json
{
  "message": "You're already registered with this email"
}
```

**Error Response (400/500):**
```json
{
  "message": "All fields are required",
  "error": "Error details"
}
```

### GET `/api/registrations`

Returns all registrations (admin endpoint).

### GET `/api/health`

Checks if server is running.

---

## File Structure

```
src/
├── components/
│   └── workshop/
│       └── RegisterSection.tsx    ← Updated form with all fields
├── pages/
│   ├── Index.tsx
│   ├── ThankYou.tsx              ← New thank you page
│   └── NotFound.tsx
└── App.tsx                         ← Updated with thank you route

root/
├── server.js                       ← Backend Express server
├── .env                            ← Email configuration (don't commit)
├── .env.example                    ← Example env file
├── registrations.json              ← Auto-generated registration storage
└── package.json                    ← Updated with dependencies
```

---

## Email Templates

### User Confirmation Email
- Shows registration details
- Displays workshop date/time
- Confirms what was submitted

### Admin Notification Email
- Shows new registration details
- Includes timestamp
- Helps track registrations

---

## Troubleshooting

### Issue: "Error sending user email"

**Solution:**
1. Check if `.env` file exists and has correct values
2. For Gmail: Verify you used an "App Password" (not your regular password)
3. Check email service credentials are correct
4. Ensure 2FA is enabled for Gmail accounts

### Issue: "CORS error" or "Cannot POST /api/register"

**Solution:**
1. Make sure backend server is running: `npm run server`
2. Frontend should be on `http://localhost:8080`
3. Backend should be on `http://localhost:5000`
4. Check `vite.config.ts` has proxy configured

### Issue: Registrations not being saved

**Solution:**
1. Check if `registrations.json` file exists in root
2. Ensure write permissions on project directory
3. Check server logs for errors

### Issue: "Already registered" message

**Solution:**
The system checks for existing emails (case-insensitive).
To reset: Delete or edit the email in `registrations.json`

---

## Security Notes

⚠️ **Important:**
1. Never commit `.env` file to git
2. Never share your email password
3. Use application-specific passwords (Gmail App Passwords)
4. In production, use environment variables from your hosting platform
5. Consider adding rate limiting to prevent spam

---

## Next Steps

1. **Test the registration** with a test email
2. **Configure admin email** to receive notifications
3. **Customize email templates** in `server.js` if needed
4. **Create `.env` file** with your email credentials
5. **Run `npm run dev:full`** to test the full system

---

## Support

For issues or questions about:
- **Email setup**: Check your email provider's documentation
- **Nodemailer**: Visit [nodemailer.com](https://nodemailer.com/)
- **Express**: Visit [expressjs.com](https://expressjs.com/)

---

**Last Updated:** March 6, 2026
**Version:** 1.0.0
