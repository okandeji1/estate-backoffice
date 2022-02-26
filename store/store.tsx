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
import userReducer from "./slices/user.slice";
import propertySlice from "./slices/property.slice";
import loadingReducer from "./slices/loading.slice";
import appSettingsReducer from "./slices/app-settings.slice";
import packageReducer from "./slices/package.slice";
// import betReducer from "./slices/bet.slice";

const rootReducer = combineReducers({
  user: userReducer,
  loading: loadingReducer,
  appSettings: appSettingsReducer,
  property: propertySlice,
  package: packageReducer,
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
