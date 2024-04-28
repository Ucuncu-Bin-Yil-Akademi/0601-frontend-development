import { createSlice } from "@reduxjs/toolkit";

const initialStateOfPosts = [
  {
    id: 1,
    title: "Post 1",
    content: "Content of Post 1",
  },
  {
    id: 2,
    title: "Post 2",
    content: "Content of Post 2",
  },
  {
    id: 3,
    title: "Post 3",
    content: "Content of Post 3",
  },
];

const postSlice = createSlice({
  name: "posts",
  initialState: initialStateOfPosts,
  reducers: {
    addPost: (state, action) => {
      const { id, title, content } = action.payload;
      state.push({ id, title, content });
    },
    deletePost: (state, action) => {
      const { id } = action.payload;
      return state.filter((post) => post.id !== id);
    },
  },
});

export const { addPost, deletePost } = postSlice.actions;
export default postSlice.reducer;
