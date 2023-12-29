const { DataTypes, Model } = require('sequelize');
class Product extends Model {}

Product.init(
  {
    // define other attributes here
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    // define other attributes here
  },
  {
    sequelize,
    modelName: 'Product',
  }
);