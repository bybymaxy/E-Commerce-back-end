const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('e_commerce_db', 'root', 'Halloween1!', {
  host: 'localhost',
  dialect: 'mysql',
});

module.exports = sequelize;