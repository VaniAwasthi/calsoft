import {
  FETCH_CASESTUDIES_FAILURE,
  FETCH_CASESTUDIES_REQUEST,
  FETCH_CASESTUDIES_SUCCESS,
} from "../actions/type";

const initialState = {
  data: [],
  isLoading: false,
  error: null,
};

export const caseStudyReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CASESTUDIES_REQUEST:
      return { ...state, isLoading: true, error: null };
    case FETCH_CASESTUDIES_SUCCESS:
      return { ...state, isLoading: false, data: action.payload };
    case FETCH_CASESTUDIES_FAILURE:
      return { ...state, isLoading: false, error: action.payload };
    default:
      return state;
  }
};

export default caseStudyReducer;
