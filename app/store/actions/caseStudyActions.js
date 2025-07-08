import axiosInstance from "../api-config/axiosInstance";
import {
  FETCH_CASESTUDIES_REQUEST,
  FETCH_CASESTUDIES_SUCCESS,
  FETCH_CASESTUDIES_FAILURE,
  START_LOADING,
  STOP_LOADING,
} from "./type";

export const fetchCaseStudies = () => async (dispatch) => {
  dispatch({ type: START_LOADING }); // global loader
  dispatch({ type: FETCH_CASESTUDIES_REQUEST });

  try {
    const response = await axiosInstance.get(
      "/casestudy/68691234f16d0ff3e8f15e5d"
    );

    dispatch({
      type: FETCH_CASESTUDIES_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: FETCH_CASESTUDIES_FAILURE,
      payload: error.message,
    });
  } finally {
    dispatch({ type: STOP_LOADING }); // stop global loader
  }
};
