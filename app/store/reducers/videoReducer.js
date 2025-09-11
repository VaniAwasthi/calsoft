import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  list: [],
  data: null,
  selectedId: null,
  isLoading: false,
  error: null,
};

const videosSlice = createSlice({
  name: "videos",
  initialState,
  reducers: {
    setVideosList: (state, action) => {
      state.list = action.payload;
    },

    setVideosData: (state, action) => {
      state.data = action.payload;
    },

    setSelectedVideosId: (state, action) => {
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
  setVideosList,
  setVideosData,
  setSelectedVideosId,
  setLoading,
  setError,
} = videosSlice.actions;

export default videosSlice.reducer;
