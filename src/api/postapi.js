// Assuming you already have something like this for fetchPosts
export const fetchPosts = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  };
  
  // Add this function to fetch a single post
  export const fetchPost = async (postId) => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  }; 
  