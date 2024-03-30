import React from 'react';
import { useNavigate } from 'react-router-dom';

const PostCard = ({ post }) => {
  const navigate = useNavigate(); // Use useNavigate hook here

  const handleNavigate = () => {
    navigate(`/item/${post.id}`); // Use navigate function for navigation
  };

  return (
    <div onClick={handleNavigate}>
      <img src={post.imgSrc} alt="Post" />
      <h3>{post.title.length > 50 ? `${post.title.slice(0, 50)}...` : post.title}</h3>
      <p>{post.body.length > 100 ? `${post.body.slice(0, 100)}... Read More` : post.body}</p>
    </div>
  );
};

export default PostCard;
