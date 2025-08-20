import axiosInstance from "../api-config/axiosInstance.js";
import {
  setError,
  setWhitepaperData,
  setWhitepaperList,
} from "../reducers/whitepaperReducer.js";

// Fetch all Case Study list
export const fetchWhitepaperList = () => async (dispatch) => {
  try {
    const response = await axiosInstance.get("/whitepapers");
    dispatch(setWhitepaperList(response.data));
  } catch (error) {
    dispatch(setError(error));
  }
};

// Fetch one whitePaper by ID
export const fetchWhitepaperById = (id) => async (dispatch) => {
  try {
    const response = await axiosInstance.get(`/casestudy/${id}`);
    

    dispatch(setWhitepaperData(response.data));
  } catch (error) {
    dispatch(setError(error.message));
  }
};
