# Tech-Blog


## Description

This CMS-style blog site allows users to manage blog posts, including creating, viewing, updating, and deleting posts. Users can also sign up, sign in, and log out. The site includes a homepage, a dashboard, and various user interaction features.

## Features

- **Homepage:** Displays existing blog posts with navigation links to the homepage and dashboard. Users can log in or sign up from here.
- **Sign Up:** Users can create an account by providing a username and password. Once signed up, they are logged in automatically.
- **Sign In:** Returning users can log in with their username and password.
- **Dashboard:** Logged-in users can view their existing blog posts, create new posts, and manage (update or delete) their posts.
- **Blog Post Details:** Each blog post displays the title, contents, creator’s username, and date created. Users can leave comments on posts.
- **Comments:** Users can submit comments on blog posts. Comments are displayed with the creator’s username and date created.
- **Logout:** Users can log out of their account, which ends their session and redirects them to the homepage.
- **Session Timeout:** If a user is idle for too long, they are prompted to log in again before adding, updating, or deleting posts.

## User Stories

1. **Homepage Display:**
   - When the site is visited for the first time, the homepage is displayed with existing blog posts, navigation links for the homepage and the dashboard, and an option to log in.

2. **Navigation:**
   - Clicking on the homepage link takes the user to the homepage.
   - Clicking on other navigation links prompts the user to either sign up or sign in.

3. **Sign Up Process:**
   - Users can sign up by providing a username and password.
   - Upon clicking the sign-up button, user credentials are saved, and the user is logged in.

4. **Sign In Process:**
   - Returning users can sign in by entering their username and password.
   - After signing in, users see navigation links for the homepage, the dashboard, and the option to log out.

5. **Viewing Blog Posts:**
   - While signed in, clicking on the homepage option shows existing blog posts, including titles and dates created.
   - Clicking on a blog post displays the post title, contents, creator’s username, and date created. Users can leave comments.

6. **Commenting on Posts:**
   - Signed-in users can submit comments on blog posts.
   - Comments are saved and displayed with the comment creator’s username and date created.

7. **Dashboard Management:**
   - Clicking on the dashboard option shows existing blog posts and an option to add a new blog post.
   - Users can add a new blog post by entering a title and contents. The post is saved, and the dashboard updates with the new post.
   - Users can also delete or update their existing posts from the dashboard.

8. **Logout Process:**
   - Clicking the logout option signs the user out and redirects them to the homepage.

9. **Session Timeout Handling:**
   - If a user is idle for too long, they are prompted to log in again before performing actions like adding, updating, or deleting posts.
