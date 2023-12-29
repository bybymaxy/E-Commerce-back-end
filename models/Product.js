const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Tag extends Model {}

Tag.init(
  {
    // define attributes here
    tag_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    // define other attributes here
  },
  {
    sequelize,
    modelName: 'Tag',
    timestamps: false,
    freezeTableName: true,
    underscored: true,
  }
);

module.exports = product;