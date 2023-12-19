const { DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

const Product = sequelize.define('Product', {
  // define the model attributes here
});

module.exports = Product;