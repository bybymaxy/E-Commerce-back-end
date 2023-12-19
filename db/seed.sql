-- Insert categories
INSERT INTO categories (category_name) VALUES
  ('Electronics'),
  ('Clothing'),
  ('Books');

-- Insert products
INSERT INTO products (product_name, price, stock, category_id) VALUES
  ('Laptop', 999.99, 10, 1),
  ('T-Shirt', 19.99, 50, 2),
  ('Novel', 9.99, 100, 3);

-- Insert tags
INSERT INTO tags (tag_name) VALUES
  ('New'),
  ('Sale'),
  ('Popular');

-- Insert product tags
INSERT INTO product_tags (product_id, tag_id) VALUES
  (1, 1),
  (1, 2),
  (2, 2),
  (3, 3);
