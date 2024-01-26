const express = require('express');
const routes = require('./routes');
const sequelize = require('./config/connection');

const app = express();
const PORT = process.env.PORT || 3001;

app.get('/api', (req, res) => {
  res.json({ message: 'Hello, World!' });
});

// POST route
app.post('/api', (req, res) => {
  const { body } = req;
  res.json({ message: 'Data saved successfully!' });
});

// PUT route
app.put('/api/:id', (req, res) => {
  const { id } = req.params;
  const { body } = req;
  res.json({ message: `Data with id ${id} updated successfully!` });
});

// DELETE route
app.delete('/api/:id', (req, res) => {
  const { id } = req.params;
  res.json({ message: `Data with id ${id} deleted successfully!` });
});


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
});