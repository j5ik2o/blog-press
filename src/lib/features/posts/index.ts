import type { RootState } from "@/lib/store";
import type { Post } from "@/types/post";
import { type PayloadAction, createSlice } from "@reduxjs/toolkit";

interface PostsState {
  postEntries: Post[];
}

const initialState: PostsState = {
  postEntries: [],
};

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    setPosts: (state, action: PayloadAction<Post[]>) => {
      state.postEntries = action.payload;
    },
  },
});

export const { setPosts } = postsSlice.actions;
export const selectPosts = (state: RootState) => {
  return state.posts.postEntries || [];
};
export default postsSlice.reducer;
