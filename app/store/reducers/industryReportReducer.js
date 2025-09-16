import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  list: [],
  data: null,
  selectedId: null,
  isLoading: false,
  error: null,
};

const industryReportSlice = createSlice({
  name: "industryreport",
  initialState,
  reducers: {
    setIndustryReportList: (state, action) => {
      state.list = action.payload.data;
    },
    setIndustryReportData: (state, action) => {
      state.data = action.payload.data;
    },
    setSelectedIndustryReportId: (state, action) => {
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
  setIndustryReportList,
  setIndustryReportData,
  setSelectedIndustryReportId,
  setLoading,
  setError,
} = industryReportSlice.actions;

export default industryReportSlice.reducer;
