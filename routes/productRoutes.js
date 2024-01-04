const express = require('express');
const router = express.Router();
const Product = require('../models/Product');

router.get('/', async (req, res) => {
  try {
    const products = await Product.findAll();
    res.json(products);
  } catch (error) {
    console.error('Error retrieving products:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

router.post('/', async (req, res) => {
  try {
    const { product_name, /* other attributes */ } = req.body;

    // Validate that product_name is provided
    if (!product_name) {
      return res.status(400).json({ error: 'Product name is required' });
    }

    // Create the product
    const newProduct = await Product.create({
      product_name,
      /* other attributes */
    });

    res.status(201).json(newProduct); // Return the newly created product in the response
  } catch (error) {
    console.error('Error creating product:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

router.put('/:id', async (req, res) => {
  try {
    const productData = req.body; // Get the updated product data from the request body
    const productId = req.params.id; // Get the product ID from the request parameters

    const updatedProduct = await Product.update(productData, {
      where: { id: productId }, // Update the product with the matching ID
    });

    res.json(updatedProduct); // Return the updated product in the response
  } catch (error) {
    console.error('Error updating product:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const productId = req.params.id; // Get the product ID from the request parameters

    await Product.destroy({
      where: { id: productId }, // Delete the product with the matching ID
    });

    res.status(204).end(); // Return a 204 No Content response
  } catch (error) {
    console.error('Error deleting product:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;