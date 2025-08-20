import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  list: [],
  data: null,
  selectedId: null,
  isLoading: false,
  error: null,
};

const UseCasesSlice = createSlice({
  name: "usecases",
  initialState,
  reducers: {
    setUseCasesList: (state, action) => {
      state.list = action.payload.data;
    },

    setUseCasesData: (state, action) => {
      state.data = action.payload;
    },

    setSelectedUseCasesId: (state, action) => {
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
  setUseCasesList,
  setUseCasesData,
  setSelectedUseCasesId,
  setLoading,
  setError,
} = UseCasesSlice.actions;

export default UseCasesSlice.reducer;
