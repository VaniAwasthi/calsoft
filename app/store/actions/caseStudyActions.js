// store/actions/caseStudyActions.js
import {
  setCaseStudyData,
  setCaseStudyList,
  setCaseStudyListLimit,
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

// fetch case study for limited
export const fetchCaseStudyListLimit = () => async (dispatch) => {
  try {
    const response = await axiosInstance.get("/casestudy?limit=4");
    dispatch(setCaseStudyListLimit(response.data));
  } catch (error) {
    dispatch(setCaseStudyError(error.message));
  }
};
