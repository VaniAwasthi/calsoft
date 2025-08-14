import axiosInstance from "../api-config/axiosInstance.js";
import {
  setDatasheetsData,
  setDatasheetsList,
} from "../reducers/datasheetReducer.js";

// Fetch all DataSheet list
export const fetchDatasheetList = () => async (dispatch) => {
  try {
    const response = await axiosInstance.get("/datasheets");
    dispatch(setDatasheetsList(response.data));
  } catch (error) {
    dispatch(setError(error));
  }
};

// Fetch one datasheet by ID
export const fetchDatasheetById = (id) => async (dispatch) => {
  try {
    const response = await axiosInstance.get(`/casestudy/${id}`);

    dispatch(setDatasheetsData(response.data));
  } catch (error) {
    dispatch(setError(error.message));
  }
};
