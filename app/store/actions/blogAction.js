import axiosInstance from "../api-config/axiosInstance.js";
import {
  setBlogData,
  setBlogFilterList,
  setBlogLimitedList,
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
// Fetch filtered blog list
export const fetchFilteredBlogs =
  ({ author, industry, topics = [] }) =>
  async (dispatch) => {
    try {
      const params = new URLSearchParams();

      if (author) params.append("author", author);
      if (industry) params.append("industry", industry);
      topics.forEach((topic) => params.append("topic", topic)); // Support multiple topics

      const response = await axiosInstance.get(`/blogs?${params.toString()}`);
      dispatch(setBlogList(response.data));
    } catch (error) {
      dispatch(setError(error.message));
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
// fetch blog for limited
export const fetchBlogListLimit = (number) => async (dispatch) => {
  try {
    const response = await axiosInstance.get(`/blogs?limit=${number}`);
    dispatch(setBlogLimitedList(response.data));
  } catch (error) {
    dispatch(setCaseStudyError(error.message));
  }
};
