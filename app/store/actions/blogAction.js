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
  ({ Author, Industry, Topics }) =>
  async (dispatch) => {
    try {
      const params = new URLSearchParams();

      const normalizeId = (value) => {
        if (!value) return undefined;
        if (typeof value === "string") return value;
        if (typeof value === "object" && value._id) return value._id;
        return undefined;
      };

      const authorId = Author === "All" ? undefined : normalizeId(Author);
      const industryId = Industry === "All" ? undefined : normalizeId(Industry);

      const topicIds = Array.isArray(Topics)
        ? Topics.map((t) => normalizeId(t)).filter(Boolean)
        : [];

      if (authorId) params.append("author", authorId);
      if (industryId) params.append("industry", industryId);
      // Build query manually to avoid encoding commas between topic IDs
      const queryParts = [];
      if (authorId) queryParts.push(`author=${encodeURIComponent(authorId)}`);
      if (industryId)
        queryParts.push(`industry=${encodeURIComponent(industryId)}`);
      if (topicIds.length > 0) {
        const encodedTopics = topicIds
          .map((id) => encodeURIComponent(id))
          .join(",");
        queryParts.push(`topic=${encodedTopics}`);
      }

      const url = queryParts.length
        ? `/blogs?${queryParts.join("&")}`
        : "/blogs";
      const response = await axiosInstance.get(url);
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
