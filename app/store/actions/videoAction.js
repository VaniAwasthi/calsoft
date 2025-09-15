import axiosInstance from "../api-config/axiosInstance.js";
import { setError, setVideosList } from "../reducers/videoReducer.js";


// Fetch all podcasts list
export const fetchVideosList = () => async (dispatch) => {
  try {
    const response = await axiosInstance.get("/videos");
dispatch(setVideosList(response.data?.videos || []));
  } catch (error) {
    dispatch(setError(error));
  }
};

// // Fetch one podcasts by ID
// export const fetchPodcastsById = (id) => async (dispatch) => {
//   try {
//     const response = await axiosInstance.get(`/casestudy/${id}`);

//     dispatch(setpodcastsData(response.data));
//   } catch (error) {
//     dispatch(setError(error.message));
//   }
// };
