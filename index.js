const express = require('express');
const { Sequelize } = require('sequelize');
const dotenv = require('dotenv');
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: 'localhost',
    dialect: 'mysql',
  }
);

// Models
const Category = require('./models/Category');
const Product = require('./models/Product');
const Tag = require('./models/Tag');

// Routes
const categoryRoutes = require('./routes/categoryRoutes');
const productRoutes = require('./routes/productRoutes');
const tagRoutes = require('./routes/tagRoutes');

app.use(express.json());

app.use('/api/categories', categoryRoutes);
app.use('/api/products', productRoutes);
app.use('/api/tags', tagRoutes);

// Sync models to the database
sequelize.sync({ force: true }).then(() => {
  // Start the server
  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
});