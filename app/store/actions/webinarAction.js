import axiosInstance from "../api-config/axiosInstance.js";

import {
  setError,
  setWebinarsData,
  setWebinarsList,
} from "../reducers/webinarsReducer.js";

// Fetch all webinars list
export const fetchWebinarsList = () => async (dispatch) => {
  try {
    const response = await axiosInstance.get("/webinars");
    dispatch(setWebinarsList(response.data));
  } catch (error) {
    dispatch(setError(error));
  }
};

// Fetch one webinars by ID
export const fetchWebinarsById = (id) => async (dispatch) => {
  try {
    const response = await axiosInstance.get(`/casestudy/${id}`);

    dispatch(setWebinarsData(response.data));
  } catch (error) {
    dispatch(setError(error.message));
  }
};
