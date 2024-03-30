import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchPosts, fetchPost } from '../../api/postapi'; // Make sure you have this fetchPost function in your API helpers

export const loadPosts = createAsyncThunk('posts/load', async () => {
  const response = await fetchPosts();
  return response;
});

// Add this new async thunk for fetching a single post
export const loadPost = createAsyncThunk('posts/loadPost', async (postId) => {
  const response = await fetchPost(postId); // fetchPost needs to be implemented in your API helpers
  return response;
});

const postsSlice = createSlice({
  name: 'posts',
  initialState: {
    items: [],
    currentItem: null, // Add a field to store the current post
    loading: false,
    error: null
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loadPosts.pending, (state) => {
        state.loading = true;
      })
      .addCase(loadPosts.fulfilled, (state, action) => {
        state.items = action.payload;
        state.loading = false;
      })
      .addCase(loadPosts.rejected, (state, action) => {
        state.error = action.error.message;
        state.loading = false;
      })
      // Handle the loadPost async thunk
      .addCase(loadPost.pending, (state) => {
        state.loading = true;
      })
      .addCase(loadPost.fulfilled, (state, action) => {
        state.currentItem = action.payload;
        state.loading = false;
      })
      .addCase(loadPost.rejected, (state, action) => {
        state.error = action.error.message;
        state.loading = false;
      });
  },
});

export default postsSlice.reducer;
