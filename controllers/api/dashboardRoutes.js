const router = require('express').Router();
const { Post, User, Comment } = require('../../models'); // Assuming you have a Post model
const withAuth = require('../../utils/auth'); // Middleware to require authentication

// GET route for displaying all posts by the logged-in user
// Render dashboard with user's posts
router.get('/dashboard', async (req, res) => {
    try {
        const posts = await Post.findAll({
            where: { user_id: req.session.user_id }
        });

        res.render('dashboard', { posts, loggedIn: req.session.loggedIn });
    } catch (err) {
        res.status(500).json(err);
    }
});

// POST route for creating a new post
router.post('/dashboard', async (req, res) => {
    try {
        const newPost = await Post.create({
            title: req.body.title,
            content: req.body.content,
            user_id: req.session.user_id
        });

        res.redirect('/dashboard');
    } catch (err) {
        res.status(500).json(err);
    }
});


// DELETE route for removing a post
router.delete('/:id', async (req, res) => {
  try {
    const postData = await Post.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!postData) {
      res.status(404).json({ message: 'No post found with this id!' });
      return;
    }

    res.status(200).json(postData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/dashboard', (req, res) => {
    // Code to render the dashboard
    res.render('dashboard', { user_id: req.session.user_id });
  });
module.exports = router;
