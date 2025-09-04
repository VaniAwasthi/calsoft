import axiosInstance from "../api-config/axiosInstance.js";
import { setIndustryReportData, setIndustryReportList } from "../reducers/industryReportReducer.js";


// Fetch all industry report list
export const fetchIndustryReportList = () => async (dispatch) => {
  try {
    const response = await axiosInstance.get("/industry_reports");
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
