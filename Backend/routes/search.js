const express = require('express');
const router = express.Router();
const Course = require('../models/Course');
const Event = require('../models/Event');
const GalleryItem = require('../models/GalleryItem');

router.get('/', async (req, res) => {
  const q = req.query.q ? req.query.q.toLowerCase() : '';
  try {
    const courses = await Course.find({
      $or: [
        { name: { $regex: q, $options: 'i' } },
        { details: { $regex: q, $options: 'i' } }
      ]
    });

    const events = await Event.find({
      $or: [
        { name: { $regex: q, $options: 'i' } },
        { details: { $regex: q, $options: 'i' } }
      ]
    });

    const gallery = await GalleryItem.find({
      $or: [
        { title: { $regex: q, $options: 'i' } },
        { description: { $regex: q, $options: 'i' } }
      ]
    });

    res.json({ courses, events, gallery });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;