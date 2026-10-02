const express = require('express');
const router = express.Router();
const authRoutes = require('./authRoutes');

// Health Check API
router.get('/health', (req, res) => {
  res.status(200).json({
    success: true,
    message: 'Tech-Era Backend API is running smoothly',
    timestamp: new Date().toISOString(),
  });
});

// Mount Routes
router.use('/auth', authRoutes);

module.exports = router;
