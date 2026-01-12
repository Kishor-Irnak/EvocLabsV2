const { Resend } = require('resend');

// Load environment variables
require('dotenv').config();

const resend = new Resend(process.env.RESEND_API_KEY);

const formatBudget = (budgetValue) => {
  const budgetMap = {
    'under-10k': 'Under $10,000',
    '10k-50k': '$10,000 - $50,000',
    '50k-100k': '$50,000 - $100,000',
    '100k-500k': '$100,000 - $500,000',
    'over-500k': 'Over $500,000'
  };
  
  return budgetMap[budgetValue] || budgetValue;
};

const sendDemoRequestEmail = async ({ name, workEmail, website, budget, goals }) => {
  try {
    const formattedBudget = formatBudget(budget);

    const emailHtml = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <style>
            body {
              font-family: Arial, sans-serif;
              line-height: 1.6;
              color: #333;
              max-width: 600px;
              margin: 0 auto;
              padding: 20px;
            }
            .header {
              background-color: #f8f9fa;
              padding: 20px;
              text-align: center;
              border-radius: 8px;
              margin-bottom: 20px;
            }
            .content {
              background-color: #ffffff;
              padding: 30px;
              border-radius: 8px;
              box-shadow: 0 2px 4px rgba(0,0,0,0.1);
            }
            .field {
              margin-bottom: 15px;
              padding-bottom: 15px;
              border-bottom: 1px solid #eee;
            }
            .field:last-child {
              border-bottom: none;
            }
            .label {
              font-weight: bold;
              color: #555;
              display: block;
              margin-bottom: 5px;
            }
            .value {
              color: #333;
            }
            .footer {
              margin-top: 30px;
              text-align: center;
              color: #777;
              font-size: 14px;
            }
          </style>
        </head>
        <body>
          <div class="header">
            <h1>New Demo Request</h1>
            <p>A new strategy call has been booked</p>
          </div>
          
          <div class="content">
            <div class="field">
              <span class="label">Name:</span>
              <span class="value">${name}</span>
            </div>
            
            <div class="field">
              <span class="label">Work Email:</span>
              <span class="value">${workEmail}</span>
            </div>
            
            <div class="field">
              <span class="label">Website:</span>
              <span class="value">${website}</span>
            </div>
            
            <div class="field">
              <span class="label">Budget Range:</span>
              <span class="value">${formattedBudget}</span>
            </div>
            
            <div class="field">
              <span class="label">Goals:</span>
              <span class="value">${goals}</span>
            </div>
          </div>
          
          <div class="footer">
            <p>This is an automated message from EvocLabs website</p>
          </div>
        </body>
      </html>
    `;

    const data = await resend.emails.send({
      from: 'onboarding@resend.dev', // You can customize this
      to: ['sociodesk.help@gmail.com'],
      subject: `New Demo Request from ${name}`,
      html: emailHtml,
    });

    console.log('Email sent successfully:', data);
    return data;
  } catch (error) {
    console.error('Error sending email:', error);
    throw error;
  }
};

module.exports = {
  sendDemoRequestEmail
};