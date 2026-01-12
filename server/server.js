require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bookDemoRoutes = require('./routes/bookDemo');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api', bookDemoRoutes);

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

module.exports = app;