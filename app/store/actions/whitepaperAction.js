import axiosInstance from "../api-config/axiosInstance.js";
import {
  setError,
  setWhitepaperData,
  setWhitepaperList,
} from "../reducers/whitepaperReducer.js";

// Fetch all Case Study list
export const fetchWhitepaperList =
  ({ Industry, Topics }) =>
  async (dispatch) => {
    try {
      const params = new URLSearchParams();

      const normalizeId = (value) => {
        if (!value) return undefined;
        if (typeof value === "string") return value;
        if (typeof value === "object" && value._id) return value._id;
        return undefined;
      };

      const industryId = Industry === "All" ? undefined : normalizeId(Industry);

      const topicIds = Array.isArray(Topics)
        ? Topics.map((t) => normalizeId(t)).filter(Boolean)
        : [];

      if (industryId) params.append("industry", industryId);
      // Build query manually to avoid encoding commas between topic IDs
      const queryParts = [];
      if (industryId)
        queryParts.push(`industry=${encodeURIComponent(industryId)}`);
      if (topicIds.length > 0) {
        const encodedTopics = topicIds
          .map((id) => encodeURIComponent(id))
          .join(",");
        queryParts.push(`topic=${encodedTopics}`);
      }

      const url = queryParts.length
        ? `/whitepapers?${queryParts.join("&")}`
        : "/whitepapers";

      const response = await axiosInstance.get(url);
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
