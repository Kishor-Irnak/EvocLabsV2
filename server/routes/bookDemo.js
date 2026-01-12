const express = require('express');
const { sendDemoRequestEmail } = require('../utils/emailService');
const router = express.Router();

router.post('/book-demo', async (req, res) => {
  try {
    const { name, workEmail, website, budget, goals } = req.body;

    // Validate required fields
    if (!name || !workEmail || !website || !budget || !goals) {
      return res.status(400).json({ 
        error: 'All fields are required' 
      });
    }

    // Send email using Resend
    await sendDemoRequestEmail({ name, workEmail, website, budget, goals });

    res.status(200).json({ 
      message: 'Demo request submitted successfully' 
    });
  } catch (error) {
    console.error('Error processing demo request:', error);
    res.status(500).json({ 
      error: 'Failed to submit demo request' 
    });
  }
});

module.exports = router;