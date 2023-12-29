const express = require('express');
const router = express.Router();
const Category = require('../models/Category');


router.get('/', async (req, res) => {
  try {
    const categories = await Category.findAll();
    res.json(categories);
  } catch (error) {
    console.error('Error retrieving categories:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

router.post('/', async (req, res) => {
  try {
    const categoryData = req.body; // Get the category data from the request body
    const newCategory = await Category.create(categoryData); // Create a new category using the Category model
    res.status(201).json(newCategory); // Return the newly created category in the response
  } catch (error) {
    console.error('Error creating category:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

router.put('/:id', async (req, res) => {
  try {
    const categoryData = req.body; // Get the updated category data from the request body
    const categoryId = req.params.id; // Get the category ID from the request parameters
    const updatedCategory = await Category.update(categoryData, {
      where: { id: categoryId }, // Update the category with the matching ID
    });
    res.json(updatedCategory); // Return the updated category in the response
  } catch (error) {
    console.error('Error updating category:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const categoryId = req.params.id; // Get the category ID from the request parameters
    await Category.destroy({
      where: { id: categoryId }, // Delete the category with the matching ID
    });
    res.status(204).end(); // Return a 204 No Content response
  } catch (error) {
    console.error('Error deleting category:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;

