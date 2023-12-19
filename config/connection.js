const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('Ecommerce', 'root', 'Halloween1!', {
  host: 'localhost',
  dialect: 'mysql',
});

module.exports = sequelize;