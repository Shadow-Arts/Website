const express = require('express');
const router = express.Router();
const Course = require('../models/Course');
const adminAuth = require('../middleware/adminAuth');

// Add new course (admin only)
router.post('/', adminAuth, async (req, res) => {
  try {
    const course = new Course(req.body);
    await course.save();
    res.status(201).json(course);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Get all courses (public)
router.get('/', async (req, res) => {
  const courses = await Course.find();
  res.json(courses);
});

// Edit course (admin only)
router.put('/:id', adminAuth, async (req, res) => {
  try {
    const course = await Course.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(course);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Delete course (admin only)
router.delete('/:id', adminAuth, async (req, res) => {
  try {
    await Course.findByIdAndDelete(req.params.id);
    res.json({ message: 'Course deleted' });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;