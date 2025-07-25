import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import caseStudyReducer from "./reducers/caseStudyReducer";
import loadingReducer from "./reducers/loadingReducer";
import blogsReducer from "./reducers/blogReducer";

// Persist only `selectedId` inside `blogs`
const blogsPersistConfig = {
  key: "blogs",
  storage,
  whitelist: ["selectedId"], // ✅ Only this will persist
};
const caseStudyPersistConfig = {
  key: "caseStudy",
  storage,
  whitelist: ["selectedId"], // ✅ Only this will persist
};

// Combine all reducers
const rootReducer = combineReducers({
  loading: loadingReducer,
  caseStudy: persistReducer(caseStudyPersistConfig, caseStudyReducer),
  blogs: persistReducer(blogsPersistConfig, blogsReducer),
});

// Configure store
export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});

export const persistor = persistStore(store);
