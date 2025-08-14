import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  list: [],
  data: null,
  selectedId: null,
  isLoading: false,
  error: null,
};

const webinarSlice = createSlice({
  name: "webinars",
  initialState,
  reducers: {
    setWebinarsList: (state, action) => {
      state.list = action.payload.data;
    },

    setWebinarsData: (state, action) => {
      state.data = action.payload;
    },

    setSelectedWebinarsId: (state, action) => {
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
  setWebinarsList,
  setWebinarsData,
  setSelectedWebinarsId,
  setLoading,
  setError,
} = webinarSlice.actions;

export default webinarSlice.reducer;
