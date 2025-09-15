import axiosInstance from "../api-config/axiosInstance.js";
import {
  setUseCasesData,
  setUseCasesList,
} from "../reducers/useCasesReducer.js";

// Fetch all Usecases list
export const fetchUsecasesList =
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
        ? `/usecases?${queryParts.join("&")}`
        : "/usecases";

      const response = await axiosInstance.get(url);
      dispatch(setUseCasesList(response.data));
    } catch (error) {
      dispatch(setError(error));
    }
  };

// Fetch one useCase by ID
export const fetchUsecasesById = (id) => async (dispatch) => {
  try {
    const response = await axiosInstance.get(`/usecases/${id}`);

    dispatch(setUseCasesData(response.data));
  } catch (error) {
    dispatch(setError(error.message));
  }
};
