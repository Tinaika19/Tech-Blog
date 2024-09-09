const sequelize = require('../config/connection');
const {Comment} = require('../models');

const commentData = [
    {
      comment_text: 'Great post!',
      user_id: 2,
      post_id: 1,
    },
    {
      comment_text: 'Very insightful!',
      user_id: 1,
      post_id: 2,
    },
  ];

  const seedComment = () => Comment.bulkCreate(commentData);

module.exports = seedComment;