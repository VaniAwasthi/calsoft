import { startLoading, stopLoading } from "../reducers/loadingReducer";
import axiosInstance from "../../api/axiosInstance";

// Example async action using thunk:
export const fetchCaseStudies = () => async (dispatch) => {
  dispatch(startLoading());
  try {
    const response = await axiosInstance.get("data/casestudies");
    // Do something with response.data, maybe dispatch a data reducer
    console.log("Fetched case studies:", response.data);
  } catch (error) {
    console.error("Error fetching:", error);
  } finally {
    dispatch(stopLoading());
  }
};
