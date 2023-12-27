const express = require('express');
const router = express.Router();
const { Category } = require('../models/Category');
// GET all categories
router.get('/', (req, res) => {
  Category.findAll()
    .then((categories) => {
      res.json(categories);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ error: 'Failed to retrieve categories' });
    });
});

// GET a specific category by ID
router.get('/:id', (req, res) => {
  const categoryId = req.params.id;
  Category.findByPk(categoryId)
    .then((category) => {
      if (category) {
        res.json(category);
      } else {
        res.status(404).json({ error: 'Category not found' });
      }
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ error: 'Failed to retrieve category' });
    });
});

// POST a new category
router.post('/', (req, res) => {
  const { name } = req.body;
  Category.create({ name })
    .then((category) => {
      res.status(201).json(category);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ error: 'Failed to create category' });
    });
});

// PUT/update a category by ID
router.put('/:id', (req, res) => {
  const categoryId = req.params.id;
  const { name } = req.body;
  Category.update({ name }, { where: { id: categoryId } })
    .then((result) => {
      if (result[0] === 1) {
        res.json({ message: 'Category updated successfully' });
      } else {
        res.status(404).json({ error: 'Category not found' });
      }
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ error: 'Failed to update category' });
    });
});

// DELETE a category by ID
router.delete('/:id', (req, res) => {
  const categoryId = req.params.id;
  Category.destroy({ where: { id: categoryId } })
    .then((result) => {
      if (result === 1) {
        res.json({ message: 'Category deleted successfully' });
      } else {
        res.status(404).json({ error: 'Category not found' });
      }
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ error: 'Failed to delete category' });
    });
});

module.exports = router;