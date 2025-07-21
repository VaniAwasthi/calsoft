import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  list: [],
  data: null,
  selectedId: null,
  isLoading: false,
  error: null,
};

const blogsSlice = createSlice({
  name: "blogs",
  initialState,
  reducers: {
    setBlogList: (state, action) => {
      state.list = action.payload.data;
    },
    setBlogData: (state, action) => {
      state.data = action.payload.data;
    },
    setSelectedBlogId: (state, action) => {
      state.selectedId = action.payload;
    },
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const {
  setBlogList,
  setBlogData,
  setSelectedBlogId,
  setLoading,
  setError,
} = blogsSlice.actions;

export default blogsSlice.reducer;
