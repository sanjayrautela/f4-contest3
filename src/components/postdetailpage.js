import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { loadPosts } from '../redux/slices/postslices';
import LoadingSpinner from './common/loadingspinner';

const PostDetailPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { currentItem, loading } = useSelector((state) => state.posts);

  useEffect(() => {
    dispatch(loadPosts(id));
  }, [dispatch, id]);

  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <div>
      <h1>Post Number {currentItem.id}</h1>
      <img src={currentItem.imgSrc} alt="Post" />
      <h2>{currentItem.title}</h2>
      <p>{currentItem.body}</p>
      <p>Post was posted by {currentItem.userId}</p>
    </div>
  );
};

export default PostDetailPage;
