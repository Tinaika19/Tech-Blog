const sequelize = require('../config/connection');
const { User, Post, Comment } = require('../models');
const postData= require('./postData');
const userData = require('./userData');
const commentData = require('./commentData');



const seedDatabase = async () => {
  try {
    await sequelize.sync({ force: true });

    // Seed Users
    const users = await User.bulkCreate(userData, {
      individualHooks: true,
      returning: true,
    });

    // Seed Blogs
    const post = await Post.bulkCreate(postData, {
      returning: true,
    });

    // Seed Blogs
    const comment = await Comment.bulkCreate(commentData, {
      returning: true,
    });

    console.log('Database seeded successfully!');
    process.exit(0);
  } catch (err) {
    console.error('Failed to seed database:', err);
    process.exit(1);
  }
};

seedDatabase();