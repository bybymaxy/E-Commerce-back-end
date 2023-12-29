const Category = require('./models/Category');
const Product = require('./models/Product');
const Tag = require('./models/Tag');
const sequelize = require('./index');

(async () => {
  try {
    await sequelize.sync({ force: true });

    await Category.bulkCreate(
      [
        { name: 'Category 1', category_name: 'Default Category 1' },
        { name: 'Category 2', category_name: 'Default Category 2' },
        // ... add more categories
      ],
      { individualHooks: true }
    );

    await Product.bulkCreate(
      [
        { name: 'Product 1', categoryId: 1 },
        { name: 'Product 2', categoryId: 2 },
        // ... add more products
      ]
    );

    await Tag.bulkCreate(
      [
        { name: 'Tag 1' },
        { name: 'Tag 2' },
        // ... add more tags
      ]
    );

    console.log('Database seeded successfully');
  } catch (error) {
    console.error('Error seeding the database:', error);
  }
})();