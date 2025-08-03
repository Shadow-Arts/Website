// middleware/adminAuth.js
module.exports = (req, res, next) => {
  // Example: check for a static admin token in headers
  const adminToken = req.headers['x-admin-token'];
  if (adminToken === process.env.ADMIN_TOKEN) {
    next();
  } else {
    res.status(403).json({ error: 'Forbidden: Admins only' });
  }
};