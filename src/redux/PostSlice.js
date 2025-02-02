import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  posts: [],
  error: null,
  loading: false,
};
const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    fetchPostsStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchPostsSuccess: (state, action) => {
      state.loading = false;
      state.posts = action.payload;
    },
    fetchPostsFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { fetchPostsFailure, fetchPostsStart, fetchPostsSuccess } =
  postSlice.actions;

export default postSlice.reducer;
