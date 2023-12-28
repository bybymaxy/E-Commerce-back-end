const sequelize = require('../config/connection');
const { DataTypes } = require('sequelize');


const Product = (sequelize) => {
  const model = sequelize.define('Product', {
    // define the model attributes here
  });

  // define the model associations here

  return model;
};

module.exports = Product;