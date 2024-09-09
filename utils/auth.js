// utils/auth.js

const withAuth = (req, res, next) => {
    // Check if the user is logged in (i.e., session has a user ID)
    if (!req.session.user_id) {
      // If the user is not logged in, redirect to the login page
      return res.redirect('/login');
    } else {
      // If the user is authenticated, proceed to the next middleware or route
      next();
    }
  };
  
  module.exports = withAuth;
  