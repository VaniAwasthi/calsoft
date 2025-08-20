import axiosInstance from "../api-config/axiosInstance.js";
import { setUseCasesData, setUseCasesList } from "../reducers/useCasesReducer.js";


// Fetch all Usecases list
export const fetchUsecasesList = () => async (dispatch) => {
  try {
    const response = await axiosInstance.get("/usecases");
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
