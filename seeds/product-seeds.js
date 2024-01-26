const { Product } = require('../models');

const productData = [
  {
    product_name: 'White cotten t- 3pack',
    price: 18.99,
    stock: 44,
    category_id: 1,
  },
  {
    product_name: 'Jordens',
    price: 275.35,
    stock: 3,
    category_id: 5,
  },
  {
    product_name: 'Tampa Bay cap',
    price: 36.55,
    stock: 12,
    category_id: 4,
  },
  {
    product_name: 'Blink-182 Hits album',
    price: 18.99,
    stock: 50,
    category_id: 3,
  },
  {
    product_name: 'running pants sale',
    price: 18.99,
    stock: 42,
    category_id: 2,
  },
];

const seedProducts = () => Product.bulkCreate(productData);

module.exports = seedProducts;