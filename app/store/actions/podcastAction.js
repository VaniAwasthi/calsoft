import axiosInstance from "../api-config/axiosInstance.js";
import { setpodcastsData, setpodcastsList } from "../reducers/podcastReducer.js";


// Fetch all podcasts list
export const fetchPodcastsList = () => async (dispatch) => {
  try {
    const response = await axiosInstance.get("/podcasts");
    dispatch(setpodcastsList(response.data));
  } catch (error) {
    dispatch(setError(error));
  }
};

// Fetch one podcasts by ID
export const fetchPodcastsById = (id) => async (dispatch) => {
  try {
    const response = await axiosInstance.get(`/casestudy/${id}`);

    dispatch(setpodcastsData(response.data));
  } catch (error) {
    dispatch(setError(error.message));
  }
};
