import { configureStore } from '@reduxjs/toolkit';
import postsReducer from './slices/postslices';

export default configureStore({
  reducer: {
    posts: postsReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false,
  }),
});
