const express = require('express');
const router = express.Router();
const GalleryItem = require('../models/GalleryItem');
const adminAuth = require('../middleware/adminAuth');

// Add new gallery item (admin only)
router.post('/', adminAuth, async (req, res) => {
  try {
    const item = new GalleryItem(req.body);
    await item.save();
    res.status(201).json(item);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Get all gallery items (public)
router.get('/', async (req, res) => {
  const items = await GalleryItem.find();
  res.json(items);
});

// Edit gallery item (admin only)
router.put('/:id', adminAuth, async (req, res) => {
  try {
    const item = await GalleryItem.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(item);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Delete gallery item (admin only)
router.delete('/:id', adminAuth, async (req, res) => {
  try {
    await GalleryItem.findByIdAndDelete(req.params.id);
    res.json({ message: 'Gallery item deleted' });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;