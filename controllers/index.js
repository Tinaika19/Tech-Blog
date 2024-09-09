const express = require('express');
const router = express.Router();


const homeRoutes = require('./homeRoutes');
const dashboardRoutes = require('./api/dashboardRoutes');
const userRoutes = require('./api/userRoutes');
const postRoutes = require('./api/postRoutes');
const commentRoutes = require('./api/commentRoutes');

router.use('/', homeRoutes);
router.use('/api/dashboard', dashboardRoutes);
router.use('/api/user', userRoutes);
router.use('/api/posts', postRoutes);
router.use('/api/comments', commentRoutes);

module.exports = router;
