const mongoose = require('mongoose');

const GalleryItemSchema = new mongoose.Schema({
  image: String,
  title: String,
  description: String,
  price: String,
  medium: String,
  category: String,
});

module.exports = mongoose.model('GalleryItem', GalleryItemSchema);