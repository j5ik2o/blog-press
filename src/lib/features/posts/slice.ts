import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Post } from "@/types/post";
import {RootState} from "@/lib/store";

interface PostsState {
  postEntries: Post[];
}

const initialState: PostsState = {
  postEntries: [],
};

const postsSlice = createSlice({
  name: "postsState",
  initialState,
  reducers: {
    setPosts: (state, action: PayloadAction<Post[]>) => {
      state.postEntries = action.payload;
    },
  },
});

export const { setPosts } = postsSlice.actions;
export const selectPosts = (state: RootState) => {
  return state.postsState.postEntries || []
}
export default postsSlice.reducer;
