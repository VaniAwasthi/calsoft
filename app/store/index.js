import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";

import caseStudyReducer from "./reducers/caseStudyReducer";
import loadingReducer from "./reducers/loadingReducer";
import blogsReducer from "./reducers/blogReducer";
import whitepaperReducer from "./reducers/whitepaperReducer";
import datasheetsReducer from "./reducers/datasheetReducer";
import webinarsReducer from "./reducers/webinarsReducer";

// Helper function for persist configs
const persistConfig = (key) => ({
  key,
  storage,
  whitelist: ["selectedId"],
});

const rootReducer = combineReducers({
  loading: loadingReducer,
  caseStudy: persistReducer(persistConfig("caseStudy"), caseStudyReducer),
  blogs: persistReducer(persistConfig("blogs"), blogsReducer),
  whitepaper: persistReducer(persistConfig("whitepaper"), whitepaperReducer),
  datasheets: persistReducer(persistConfig("datasheets"), datasheetsReducer),
  webinars: persistReducer(persistConfig("webinars"), webinarsReducer),
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ["persist/PERSIST"],
      },
    }),
});

export const persistor = persistStore(store);
