const { DataTypes } = require('sequelize');
const sequelize = require('../config/connection');


const Category = (sequelize) => {
  const model = sequelize.define('Category', {
    // define the model attributes here
  });

  // define the model associations here

  return model;
};

module.exports = Category;