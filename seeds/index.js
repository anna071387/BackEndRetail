const seedCategories = require('./category-seeds');
const seedProducts = require('./product-seeds');
const seedTags = require('./tag-seeds');
const seedProductTags = require('./product-tag-seeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('Database Seeded');
  await seedCategories();
  console.log('Categories Seeded');

  await seedProducts();
  console.log('Products Seeded');

  await seedTags();
  console.log('Tags Seeded');

  await seedProductTags();
  console.log('Product Tags Seeded');

  process.exit(0);
};

seedAll();
