const Admin = require('../models/Admin'); // adjust the path to your Admin model

module.exports = async (req, res, next) => {
  try {
    const adminToken = req.headers['x-admin-token'];

    if (!adminToken) {
      return res.status(403).json({ error: 'Forbidden: No token provided' });
    }

    // Check if token exists in your admin collection
    const admin = await Admin.findOne({ token: adminToken });

    if (!admin) {
      return res.status(403).json({ error: 'Forbidden: Invalid token' });
    }

    // Optional: attach admin info to request
    req.admin = admin;
    next();

  } catch (err) {
    console.error('Error in adminAuth middleware:', err);
    res.status(500).json({ error: 'Server error' });
  }
};
