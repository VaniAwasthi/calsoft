import axiosInstance from "../../api/axiosInstance";

// No need for startLoading/stopLoading here
export const fetchCaseStudies = () => async (dispatch) => {
  try {
    const response = await axiosInstance.get("data/casestudies");
    // dispatch your success action here
    console.log("Fetched case studies:", response.data);
  } catch (error) {
    console.error("Error fetching:", error);
    // optionally dispatch error action
  }
};
