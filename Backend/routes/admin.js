const express = require('express');
const router = express.Router();
const Admin = require('../models/Admin');

async function checkAdminToken(req, res, next) {
  const token = req.headers['x-admin-token'];
  const admin = await Admin.findOne({ token });
  if (!admin) return res.status(403).json({ error: 'Invalid token' });
  next();
}

router.post('/validate-token', checkAdminToken, (req, res) => {
  res.json({ valid: true });
});

module.exports = router;