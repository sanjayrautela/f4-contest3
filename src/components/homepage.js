import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadPosts } from '../redux/slices/postslices';
import PostCard from './postcard';
import LoadingSpinner from './common/loadingspinner';

const HomePage = () => {
  const dispatch = useDispatch();
  const { items, loading } = useSelector((state) => state.posts);

  useEffect(() => {
    dispatch(loadPosts());
  }, [dispatch]);

  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <div>
      <h1>Social Media For Travellers</h1>
      <div>
        {items.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
