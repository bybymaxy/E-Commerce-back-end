const express = require('express');
const router = express.Router();
const Tag = require('../models/Tag');

router.get('/', async (req, res) => {
  try {
    const tags = await Tag.findAll();
    res.json(tags);
  } catch (error) {
    console.error('Error retrieving tags:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;