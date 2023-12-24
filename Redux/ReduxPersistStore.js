import {combineReducers, configureStore} from "@reduxjs/toolkit";
import shoppingCartReducer from "../Redux/features/shoppingCart/ShoppingCartSlice";
import { persistReducer, persistStore } from "redux-persist";
import useReducer from "@/Redux/features/user/UsersSlice";
import localStorageLib from "redux-persist/lib/storage";

const localStorageConfiguration = {
  key: "root",
  storage: localStorageLib,
  blacklist: ["user"],
};

const rootReducer = combineReducers({
  shoppingCart: shoppingCartReducer,
  user: persistReducer(localStorageConfiguration, useReducer),
});

const persistedReducer = persistReducer(localStorageConfiguration, rootReducer);

export const ReduxPersistStore = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(ReduxPersistStore);
