# EvocLabs - Book a Demo Backend

This project includes a backend service for handling "Book a Demo" form submissions and sending emails via Resend API.

## Setup Instructions

1. Install dependencies:
```bash
npm install
```

2. Create a `.env` file in the root directory with your Resend API key:
```
RESEND_API_KEY=your_resend_api_key_here
```

3. Run the development server:
```bash
npm run dev
```

4. In a separate terminal, run the backend server:
```bash
npm run server
```

## API Endpoints

- `POST /api/book-demo` - Submit a demo request form

## Form Fields

The demo request form includes:
- Name (required)
- Work Email (required)
- Website (required)
- Budget Range (required)
- Goals (required)

## Email Configuration

The backend uses Resend to send emails to `sociodesk.help@gmail.com` with the form data formatted in a professional HTML email template.