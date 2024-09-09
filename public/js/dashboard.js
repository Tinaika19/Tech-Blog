// Function to handle creating a new blog post
const newFormHandler = async (event) => {
    event.preventDefault();
  
    const title = document.querySelector('#post-title').value.trim();
    const content = document.querySelector('#post-content').value.trim();
  
    if (title && content) {
      const response = await fetch('/api/posts', {
        method: 'POST',
        body: JSON.stringify({ title, content }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        document.location.replace('/dashboard'); // Redirect to the dashboard after the post is created
      } else {
        alert('Failed to create post');
      }
    }
  };
  
  // Function to handle deleting a blog post
  const deleteButtonHandler = async (event) => {
    if (event.target.hasAttribute('data-id')) {
      const id = event.target.getAttribute('data-id');
  
      const response = await fetch(`/api/posts/${id}`, {
        method: 'DELETE',
      });
  
      if (response.ok) {
        document.location.replace('/dashboard'); // Redirect to the dashboard after deletion
      } else {
        alert('Failed to delete post');
      }
    }
  };
  
  // Attach the form handler for creating new posts
  document
    .querySelector('.new-post-form')
    .addEventListener('submit', newFormHandler);
  
  // Attach the delete button handler for deleting posts
  document
    .querySelector('.post-list')
    .addEventListener('click', deleteButtonHandler);
  