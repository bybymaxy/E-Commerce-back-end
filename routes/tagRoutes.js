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

router.post('/', async (req, res) => {
  try {
    const tagData = req.body; // Get the tag data from the request body
    const newTag = await Tag.create(tagData); // Create a new tag using the Tag model
    res.status(201).json(newTag); // Return the newly created tag in the response
  } catch (error) {
    console.error('Error creating tag:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

router.put('/:id', async (req, res) => {
  try {
    const tagData = req.body; // Get the updated tag data from the request body
    const tagId = req.params.id; // Get the tag ID from the request parameters
    const updatedTag = await Tag.update(tagData, {
      where: { id: tagId }, // Update the tag with the matching ID
    });
    res.json(updatedTag); // Return the updated tag in the response
  } catch (error) {
    console.error('Error updating tag:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const tagId = req.params.id; // Get the tag ID from the request parameters
    await Tag.destroy({
      where: { id: tagId }, // Delete the tag with the matching ID
    });
    res.status(204).end(); // Return a 204 No Content response
  } catch (error) {
    console.error('Error deleting tag:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;