import axiosInstance from "../api-config/axiosInstance.js";
import { setBlogData, setBlogList, setError } from "../reducers/blogReducer.js";

// Fetch all case studies list
export const fetchBlogList = () => async (dispatch) => {
  try {
    const response = await axiosInstance.get("/blogs");
    dispatch(setBlogList(response.data));
  } catch (error) {
    dispatch(setError(error));
  }
};

// Fetch one case study by ID
export const fetchBlogById = (id) => async (dispatch) => {
  try {
    const response = await axiosInstance.get(`/blogs/${id}`);

    dispatch(setBlogData(response.data));
  } catch (error) {
    dispatch(setError(error.message));
  }
};
