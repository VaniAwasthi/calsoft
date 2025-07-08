import { START_LOADING, STOP_LOADING } from "../actions/type";

const initialState = { isLoading: false };

export const loadingReducer = (state = initialState, action) => {
  switch (action.type) {
    case START_LOADING:
      return { isLoading: true };
    case STOP_LOADING:
      return { isLoading: false };
    default:
      return state;
  }
};
