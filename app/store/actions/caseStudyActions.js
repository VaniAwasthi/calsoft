// store/actions/caseStudyActions.js
import {
  setCaseStudyData,
  setCaseStudyList,
  setCaseStudyListLimit,
  setError,
} from "../reducers/caseStudyReducer";
import axiosInstance from "../api-config/axiosInstance.js";

// Fetch all Case Study list
export const fetchCaseStudiesList =
  ({ Industry, Topics } = {}) => // ✅ default {} prevents destructuring errors
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
      if (industryId) {
        queryParts.push(`industry=${encodeURIComponent(industryId)}`);
      }
      if (topicIds.length > 0) {
        const encodedTopics = topicIds
          .map((id) => encodeURIComponent(id))
          .join(",");
        queryParts.push(`topic=${encodedTopics}`);
      }

      const url = queryParts.length
        ? `/casestudy?${queryParts.join("&")}`
        : "/casestudy";

      const response = await axiosInstance.get(url);
      dispatch(setCaseStudyList(response.data));
    } catch (error) {
      dispatch(setError(error.message));
    }
  };

// Fetch one case study by ID
export const fetchCaseStudyById = (id) => async (dispatch) => {
  try {
    const response = await axiosInstance.get(`/casestudy/${id}`);
    dispatch(setCaseStudyData(response.data));
  } catch (error) {
    dispatch(setError(error.message));
  }
};

// Fetch case study list limited (e.g., latest 4)
export const fetchCaseStudyListLimit = () => async (dispatch) => {
  try {
    const response = await axiosInstance.get("/casestudy?limit=4");
    dispatch(setCaseStudyListLimit(response.data));
  } catch (error) {
    dispatch(setError(error.message));
  }
};
