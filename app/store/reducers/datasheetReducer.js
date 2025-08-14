import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  list: [],
  data: null,
  selectedId: null,
  isLoading: false,
  error: null,
};

const datasheetsSlice = createSlice({
  name: "datasheets",
  initialState,
  reducers: {
    setDatasheetsList: (state, action) => {
      state.list = action.payload.data;
    },

    setDatasheetsData: (state, action) => {
      state.data = action.payload;
    },

    setSelectedDatasheetsId: (state, action) => {
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
  setDatasheetsList,
  setDatasheetsData,
  setSelectedDatasheetsId,
  setLoading,
  setError,
} = datasheetsSlice.actions;

export default datasheetsSlice.reducer;
