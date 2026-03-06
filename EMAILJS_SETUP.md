# Registration System Setup Guide (EmailJS + Modal Version)

## Overview

The registration system has been updated to use **EmailJS** for client-side email sending, eliminating the need for a backend server. The system now uses a modal dialog for registration instead of showing the form directly on the page.

✅ **Modal Registration Form** - Click "Register Now" to open a dialog with the form
✅ **Client-side Email Sending** - Uses EmailJS for sending emails without a server
✅ **Thank You Page** - Opens in a new tab after successful registration
✅ **Email Confirmations** - Sends emails to both user and admin
✅ **No Backend Required** - Works entirely on the frontend

---

## Quick Setup

1. **Install EmailJS**: `npm install @emailjs/browser`
2. **Create EmailJS Account**: Go to [https://www.emailjs.com/](https://www.emailjs.com/)
3. **Set up Email Service** and **Email Templates** in EmailJS dashboard
4. **Update `.env` file** with your EmailJS credentials
5. **Test the registration** flow

---

## Environment Variables

Update your `.env` file with:

```env
# EmailJS Configuration
VITE_EMAILJS_SERVICE_ID=your_service_id_here
VITE_EMAILJS_TEMPLATE_USER=your_user_template_id_here
VITE_EMAILJS_TEMPLATE_ADMIN=your_admin_template_id_here
VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
VITE_ADMIN_EMAIL=your-admin@email.com
```

---

## EmailJS Template Variables

### User Confirmation Template:
- `{{to_email}}`, `{{to_name}}`, `{{user_name}}`, `{{user_email}}`, `{{user_designation}}`, `{{user_department}}`, `{{user_contact}}`, `{{workshop_date}}`, `{{workshop_time}}`, `{{workshop_mode}}`

### Admin Notification Template:
- `{{admin_email}}`, `{{user_name}}`, `{{user_email}}`, `{{user_designation}}`, `{{user_department}}`, `{{user_contact}}`, `{{registration_date}}`

---

## How It Works

1. User clicks "Register Now" button
2. Modal opens with registration form
3. User fills out form and submits
4. EmailJS sends confirmation emails directly from browser
5. Thank you page opens in new tab
6. Modal closes automatically

---

## Troubleshooting

- **"Failed to submit registration"**: Check EmailJS credentials in `.env`
- **Emails not sending**: Verify EmailJS service and templates are set up correctly
- **Modal not opening**: Ensure UI components are properly imported

---

**Version:** 2.0.0 (EmailJS + Modal)
**Last Updated:** March 6, 2026</content>
<parameter name="filePath">f:\MENSAGAM\gen-ai-workshop\EMAILJS_SETUP.md