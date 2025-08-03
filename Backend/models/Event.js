// models/Event.js
const mongoose = require('mongoose');
const EventSchema = new mongoose.Schema({
  name: String,
  details: String,
  photo: String,
  mainCategory: String,
  status: String,
  location: String,
  timings: String,
  register: String,
  highlights: String,
  feedback: String,
});
module.exports = mongoose.model('Event', EventSchema);