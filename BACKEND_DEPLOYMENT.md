# Deploying Backend to Render

This guide explains how to deploy the backend server to Render and connect it to your frontend hosted at https://www.evoclabs.com/

## Deploying to Render

### Step 1: Prepare Your Repository
1. Create a new GitHub repository for just the backend code
2. Copy the following files to the new repository:
   - `server/server.js`
   - `server/routes/bookDemo.js`
   - `server/utils/emailService.js`
   - `server/package.json`
   - `Procfile`

### Step 2: Create Render Account and New Web Service
1. Go to https://render.com and sign up/login
2. Click "New +" and select "Web Service"
3. Connect your GitHub repository containing the backend code
4. Configure the service:
   - Environment: Node
   - Branch: main/main
   - Name: Choose a name like "evoclabs-backend"
   - Region: Choose closest to your users

### Step 3: Set Up Environment Variables
In the Render dashboard, go to your service settings and add the environment variable:
- Key: `RESEND_API_KEY`
- Value: `re_9VEzKjpn_PWaHpDe7Z1WaamapXeHdwN58`

### Step 4: Update Frontend Components
Once deployed, you'll get a URL like `https://your-service-name.onrender.com`.

Update the API URLs in both frontend components:
- `components/BookDemo.tsx`
- `components/Contact.tsx`

Replace `'https://your-render-backend-url.onrender.com/api/book-demo'` with your actual Render URL.

## Connecting to Your Frontend

After deploying your backend to Render:

1. Get your Render backend URL (something like `https://your-app-name.onrender.com`)

2. Update the two frontend components with your actual Render URL:
   ```javascript
   // In both BookDemo.tsx and Contact.tsx
   const apiUrl = typeof window !== 'undefined' && window.location.hostname !== 'localhost' 
     ? 'https://your-actual-render-url.onrender.com/api/book-demo' // Use your real Render URL
     : '/api/book-demo';
   ```

3. Build and redeploy your frontend to GitHub Pages

## Testing the Connection

1. Visit your website at https://www.evoclabs.com/
2. Submit the forms on both the Book Demo page and the Contact section
3. Check that submissions are received at sociodesk.help@gmail.com

## Important Notes

- Keep your Resend API key secure and never expose it in client-side code
- The backend handles the email sending securely
- Both forms (Book Demo page and Contact section) will use the same backend API
- Forms will work in both development (localhost) and production (GitHub Pages + Render backend)