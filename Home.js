import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/posts')
      .then((response) => setPosts(response.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <h1>All Posts</h1>
      {posts.map((post) => (
        <div key={post._id}>
          <h3>{post.user.username}</h3>
          <p>{post.content}</p>
        </div>
      ))}
    </div>
  );
}

export default Home;
