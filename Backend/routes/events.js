const express = require('express');
const router = express.Router();
const Event = require('../models/Event');
const adminAuth = require('../middleware/adminAuth');


router.post('/validate-token', (req, res) => {
  const token = req.headers['x-admin-token'];
  if (token === process.env.ADMIN_TOKEN) {
    res.json({ valid: true });
  } else {
    res.status(403).json({ valid: false, error: 'Invalid admin token' });
  }
});


// Add new event (admin only)
router.post('/', adminAuth, async (req, res) => {
  try {
    const event = new Event(req.body);
    await event.save();
    res.status(201).json(event);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Get all events (public)
router.get('/', async (req, res) => {
  const events = await Event.find();
  res.json(events);
});

// Edit event (admin only)
router.put('/:id', adminAuth, async (req, res) => {
  try {
    const event = await Event.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(event);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Delete event (admin only)
router.delete('/:id', adminAuth, async (req, res) => {
  try {
    await Event.findByIdAndDelete(req.params.id);
    res.json({ message: 'Event deleted' });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;