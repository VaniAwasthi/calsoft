import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  list: [],
  data: null,
  selectedId: null,
  isLoading: false,
  error: null,
};

const caseStudySlice = createSlice({
  name: "caseStudy",
  initialState,
  reducers: {
    setCaseStudyList: (state, action) => {
      state.list = action.payload.data;
    },
    setCaseStudyData: (state, action) => {
      state.data = action.payload;
    },
    setSelectedCaseStudyId: (state, action) => {
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
  setCaseStudyList,
  setCaseStudyData,
  setSelectedCaseStudyId,
  setLoading,
  setError,
} = caseStudySlice.actions;

export default caseStudySlice.reducer;
