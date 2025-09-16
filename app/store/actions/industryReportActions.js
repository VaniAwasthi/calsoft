import axiosInstance from "../api-config/axiosInstance.js";
import {
  setIndustryReportData,
  setIndustryReportList,
} from "../reducers/industryReportReducer.js";

// Fetch all industry report list
export const fetchIndustryReportList =
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
        ? `/industry_reports?${queryParts.join("&")}`
        : "/industry_reports";

      const response = await axiosInstance.get(url);
      dispatch(setIndustryReportList(response.data));
    } catch (error) {
      dispatch(setError(error));
    }
  };

// Fetch one industry report by ID
export const fetchIndustryReportById = (id) => async (dispatch) => {
  try {
    const response = await axiosInstance.get(`/casestudy/${id}`);

    dispatch(setIndustryReportData(response.data));
  } catch (error) {
    dispatch(setError(error.message));
  }
};
