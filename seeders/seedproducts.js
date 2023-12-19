'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('products', [
      // Insert your product data here
      {
        name: 'Product 1',
        price: 9.99,
        // Other columns...
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      // More product data...
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('products', null, {});
  }
};