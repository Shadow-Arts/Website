// models/Course.js
const mongoose = require('mongoose');
const CourseSchema = new mongoose.Schema({
  name: String,
  details: String,
  photo: String,
  category: String,
  status: String,
  location: String,
  timings: String,
  register: String,
  highlights: String,
  feedback: String,
});
module.exports = mongoose.model('Course', CourseSchema);