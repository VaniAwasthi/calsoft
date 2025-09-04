import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  list: [],
  data: null,
  selectedId: null,
  isLoading: false,
  error: null,
};

const podcastsSlice = createSlice({
  name: "podcasts",
  initialState,
  reducers: {
    setpodcastsList: (state, action) => {
      state.list = action.payload.data;
    },

    setpodcastsData: (state, action) => {
      state.data = action.payload;
    },

    setSelectedpodcastsId: (state, action) => {
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
  setpodcastsList,
  setpodcastsData,
  setSelectedpodcastsId,
  setLoading,
  setError,
} = podcastsSlice.actions;

export default podcastsSlice.reducer;
