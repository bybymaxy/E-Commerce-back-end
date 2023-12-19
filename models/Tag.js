const { DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

const Tag = (sequelize) => {
  const model = sequelize.define('Tag', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  // define the model associations here

  return model;
};

module.exports = Tag;