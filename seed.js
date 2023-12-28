const Category = require('./models/Category');
const Product = require('./models/Product');
const Tag = require('./models/Tag');
const sequelize = require('./index').sequelize;

(async () => {
  try {
    await sequelize.sync({ force: true });

    await Category.bulkCreate([
      { name: 'Category 1' },
      { name: 'Category 2' },
      // ... add more categories
    ]);

    await Product.bulkCreate([
      { name: 'Product 1', categoryId: 1 },
      { name: 'Product 2', categoryId: 2 },
      // ... add more products
    ]);

    await Tag.bulkCreate([
      { name: 'Tag 1' },
      { name: 'Tag 2' },
      // ... add more tags
    ]);

    console.log('Database seeded successfully');
  } catch (error) {
    console.error('Error seeding the database:', error);
  } finally {
    await sequelize.close();
  }
})();