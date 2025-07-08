import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { caseStudyReducer } from "./reducers/caseStudyReducer";
import { loadingReducer } from "./reducers/loadingReducer";

const rootReducer = combineReducers({
  caseStudies: caseStudyReducer,
  loading: loadingReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
