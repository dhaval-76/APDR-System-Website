import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { createLogicMiddleware } from "redux-logic";
import autoMergeLevel2 from "redux-persist/es/stateReconciler/autoMergeLevel2";
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/es/persistStore";
import { CookieStorage } from "redux-persist-cookie-storage";
import Cookies from "cookies-js";

import { authAxios, sensorAxios } from "../services/axios";

import authReducer from "./auth/slice";
import authLogics from "./auth/logic";

import sensorReducer from "./sensor/slice";
import sensorLogics from "./sensor/logic";

const logicDependencies = {
  authAxios,
  sensorAxios,
};

const logicsArray = [...authLogics, ...sensorLogics];

const logicMiddleware = createLogicMiddleware(logicsArray, logicDependencies);

const persistConfig = {
  key: "root",
  storage: new CookieStorage(Cookies),
  stateReconciler: autoMergeLevel2,
  whitelist: ["auth"],
};

const rootReducer = combineReducers({
  auth: authReducer,
  sensor: sensorReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: [logicMiddleware],
});

export const persistor = persistStore(store);

export default store;
