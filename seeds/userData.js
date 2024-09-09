const sequelize = require('../config/connection');
const { User } = require('../models');

const userData = [
  {
    username: 'john_doe',
    password: 'password123',
  },
  {
    username: 'jane_smith',
    password: 'password456',
  },
];
const seedUser = () => User.bulkCreate(userData);

module.exports = seedUser;
