// store/actions/caseStudyActions.js
import {
  setCaseStudyData,
  setCaseStudyList,
  setError,
} from "../reducers/caseStudyReducer";
import axiosInstance from "../api-config/axiosInstance.js";

// Fetch all Case Study list
export const fetchCaseStudiesList = () => async (dispatch) => {
  try {
    const response = await axiosInstance.get("/casestudy"); // ✅ No base URL needed here
    dispatch(setCaseStudyList(response.data));
  } catch (error) {
    dispatch(setError(error.message));
  }
};

// Fetch one case study by ID
export const fetchCaseStudyById = (id) => async (dispatch) => {
  try {
    const response = await axiosInstance.get(`/casestudy/${id}`);
    dispatch(setCaseStudyData(response.data));
  } catch (error) {
    dispatch(setError(error.message));
  }
};
