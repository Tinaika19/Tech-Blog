const router = require('express').Router();
const { User } = require('../../models');
const bcrypt = require('bcrypt');

// Login route
router.post('/login', async (req, res) => {
  try {
    const user = await User.findOne({ where: { email: req.body.email } });

    if (!user) {
      res.status(400).json({ message: 'Incorrect email or password, please try again' });
      return;
    }

    const validPassword = await bcrypt.compare(req.body.password, user.password);

    if (!validPassword) {
      res.status(400).json({ message: 'Incorrect email or password, please try again' });
      return;
    }

    req.session.save(() => {
      req.session.user_id = user.id;
      req.session.loggedIn = true;
      res.json({ user, message: 'You are now logged in!' });
    });
  } catch (err) {
    res.status(500).json(err);
  }
});
// POST route to handle sign-up
router.post('/signup', async (req, res) => {
    try {
      const hashedPassword = await bcrypt.hash(req.body.password, 10);
  
      // Create the user with the hashed password
      const newUser = await User.create({
        username: req.body.username,
        email: req.body.email,
        password: hashedPassword,
      });
  
      // Save user session after signing up
      req.session.save(() => {
        req.session.loggedIn = true;
        req.session.userId = newUser.id;
        res.status(200).json(newUser);
      });
    } catch (err) {
      res.status(500).json(err);
    }
  });
module.exports = router;
