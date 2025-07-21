// store/index.js
import { configureStore } from "@reduxjs/toolkit";
import caseStudyReducer from "./reducers/caseStudyReducer.js";
import loadingReducer from "./reducers/loadingReducer.js";
import blogsReducer from "./reducers/blogReducer.js";

export const store = configureStore({
  reducer: {
    loading: loadingReducer,
    caseStudy: caseStudyReducer,
    blogs: blogsReducer,
  },
});
