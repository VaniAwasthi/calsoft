import axiosInstance from "../api-config/axiosInstance.js";
import {
  setBlogData,
  setBlogFilterList,
  setBlogList,
  setError,
} from "../reducers/blogReducer.js";

// Fetch all Blog list
export const fetchBlogList = () => async (dispatch) => {
  try {
    const response = await axiosInstance.get("/blogs");
    dispatch(setBlogList(response.data));
  } catch (error) {
    dispatch(setError(error));
  }
};
// Fetch all blogFilter list
export const fetchBlogFilterList = () => async (dispatch) => {
  try {
    const response = await axiosInstance.get("/blogs/filters");
    dispatch(setBlogFilterList(response.data));
  } catch (error) {
    dispatch(setError(error));
  }
};
// Fetch one blog by ID
export const fetchBlogById = (id) => async (dispatch) => {
  try {
    const response = await axiosInstance.get(`/blogs/${id}`);

    dispatch(setBlogData(response.data));
  } catch (error) {
    dispatch(setError(error.message));
  }
};
