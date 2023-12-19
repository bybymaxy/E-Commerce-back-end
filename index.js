const express = require('express');
const { Sequelize } = require('sequelize');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

const sequelize = new Sequelize(
    `mysql://${process.env.DB_USER}:${process.env.DB_PASSWORD}@localhost:3306/${process.env.DB_NAME}`
  );

// Models
const Category = require('./models/Category')(sequelize);
const Product = require('./models/Product')(sequelize);
const Tag = require('./models/Tag')(sequelize);

// Routes
const categoryRoutes = require('./routes/categoryRoutes')(express, Category);
const productRoutes = require('./routes/productRoutes')(express, Product);
const tagRoutes = require('./routes/tagRoutes')(express, Tag);

app.use(express.json());

app.use('/api/categories', categoryRoutes);
app.use('/api/products', productRoutes);
app.use('/api/tags', tagRoutes);

// Sync Database and Start Server
sequelize.sync({ force: true }).then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
});