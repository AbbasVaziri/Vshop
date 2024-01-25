import { combineReducers, configureStore } from "@reduxjs/toolkit";
import localStorageLib from "redux-persist/lib/storage";
import { persistStore, persistReducer, createTransform } from "redux-persist";
import shoppingCartReducer from "./features/shoppingCart/ShoppingCartSlice.js";
import useReducer from "@/Redux/features/user/UsersSlice";

const userTransform = createTransform(
  (inboundState, key) => {
    if (key === "user") {
      return { token: inboundState.token };
    }
    return inboundState;
  },
  (outboundState) => outboundState,
);

const persistConfig = {
  key: "root",
  version: 1,
  storage: localStorageLib,
  whitelist: ["user", "shoppingCart"],
  transforms: [userTransform],
};

const rootReducer = combineReducers({
  shoppingCart: shoppingCartReducer,
  user: useReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);