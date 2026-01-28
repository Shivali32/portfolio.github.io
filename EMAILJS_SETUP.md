# EmailJS Setup Guide

This contact form uses EmailJS to send emails directly from the frontend. Follow these steps to set it up:

## Step 1: Create an EmailJS Account

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account (allows 200 emails/month)

## Step 2: Create an Email Service

1. In EmailJS dashboard, go to **Email Services**
2. Click **Add New Service**
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the setup instructions
5. Copy your **Service ID**

## Step 3: Create an Email Template

1. Go to **Email Templates** in the dashboard
2. Click **Create New Template**
3. Use this template structure:

```
From: {{from_name}} <{{from_email}}>
Subject: {{subject}}

Message:
{{message}}

---
Reply to: {{from_email}}
```

4. Set the **To Email** field to your email address (shivali7080@gmail.com)
5. Copy your **Template ID**

## Step 4: Get Your Public Key

1. Go to **Account** → **General** in EmailJS dashboard
2. Copy your **Public Key**

## Step 5: Add Environment Variables

**Use a file named `.env`** in the project root (same folder as `package.json`).  
Create React App does **not** read `.env.example`—only `.env`.

1. Create a new file named exactly `.env` in the project root.
2. Add these three lines with your real values from EmailJS:

```env
REACT_APP_EMAILJS_SERVICE_ID=your_service_id_here
REACT_APP_EMAILJS_TEMPLATE_ID=your_template_id_here
REACT_APP_EMAILJS_PUBLIC_KEY=your_public_key_here
```

**Important:** 
- The file must be named `.env` (not `.env.example`).
- Never commit the `.env` file to git (it is in .gitignore).
- **Restart the dev server** after adding or changing `.env`: stop `npm start`, then run it again.

## Step 6: Test the Form

1. Start your development server: `npm start`
2. Navigate to the contact form
3. Fill out and submit the form
4. Check your email inbox!

## Troubleshooting

**"Still getting error" after adding credentials**

1. **Use `.env`, not `.env.example`**  
   Create React App only loads variables from a file named `.env`. Copy the three lines from `.env.example` into a new file named `.env` and paste your real values there.

2. **Restart the dev server**  
   After creating or editing `.env`, stop the app (Ctrl+C) and run `npm start` again. Env vars are read only at startup.

3. **Check the on-screen error**  
   The form now shows the actual EmailJS error (e.g. "Failed to fetch" for network/CORS, or a message from EmailJS). Use that to narrow down the issue.

4. **Template variables**  
   The code sends: `name`, `from_name`, `from_email`, `subject`, `message`, `time`. Your template can use any of these; the app is aligned with the "Contact Us" template.

## Alternative: Direct Configuration

If you prefer not to use environment variables, you can directly edit `GetInTouch.jsx` and replace:
- `YOUR_SERVICE_ID` with your actual Service ID
- `YOUR_TEMPLATE_ID` with your actual Template ID  
- `YOUR_PUBLIC_KEY` with your actual Public Key

Note: This is less secure and not recommended for production.
