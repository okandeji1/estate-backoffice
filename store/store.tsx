import {
  configureStore,
  combineReducers,
  getDefaultMiddleware,
} from "@reduxjs/toolkit";
import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
// import userReducer from "./slices/user.slice";
// import loadingReducer from "./slices/loading.slice";
// import appSettingsReducer from "./slices/app-settings.slice";
// import financeReducer from "./slices/finance.slice";
// import betReducer from "./slices/bet.slice";

const rootReducer = combineReducers({
  // user: userReducer,
  // loading: loadingReducer,
  // appSettings: appSettingsReducer,
  // finance: financeReducer,
  // bet: betReducer,
});

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["user"],
};

const persistReducers = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistReducers,
  middleware: getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
});

export const persistor = persistStore(store);

export default store;
