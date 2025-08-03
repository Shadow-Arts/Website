// filepath: routes/admin.js
const express = require('express');
const router = express.Router();

router.post('/validate-token', (req, res) => {
  const token = req.headers['x-admin-token'];
  if (token === process.env.ADMIN_TOKEN) {
    res.json({ valid: true });
  } else {
    res.status(403).json({ valid: false, error: 'Invalid admin token' });
  }
});

module.exports = router;