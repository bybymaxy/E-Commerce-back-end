// categoryRoutes.js
module.exports = (express, Category) => {
    const router = express.Router();
  
    // Get all categories
    router.get('/', async (req, res) => {
      try {
        const categories = await Category.findAll();
        res.json(categories);
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
      }
    });
  
    // Other CRUD operations can be added here
  
    return router;
  };