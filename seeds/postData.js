
const sequelize = require('../config/connection');
const {Post} = require('../models');

const postData = [
    {
      title: 'My First Post',
      contents: 'This is my first blog post content.',
      user_id: 1,
    },
    {
      title: 'Tech Trends 2024',
      contents: 'Some exciting trends in tech for the year 2024.',
      user_id: 2,
    },
  ];
  const seedPost = () => Post.bulkCreate(postData);

module.exports = seedPost;
