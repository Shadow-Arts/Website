const mongoose = require('mongoose');

const adminSchema = new mongoose.Schema({
  username: String,
  token: String
});

module.exports = mongoose.model('Admin', adminSchema, 'admin'); // <-- specify collection name