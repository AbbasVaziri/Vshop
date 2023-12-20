const { configureStore, combineReducers } = require("@reduxjs/toolkit");
import shoppingCartReducer from "../Redux/features/shoppingCart/ShoppingCartSlice";
import { persistReducer, persistStore } from "redux-persist";
import useReducer from "../Redux/features/users/UsersSlice";
import localStorageLib from "redux-persist/lib/storage";
import sessionStorageLib from "redux-persist/lib/storage/session";

// Configuration for redux-persist
// const configuration = {
//   key: 'globalstorage',
//   storage,
// }

const localStorageConfiguration = {
  key: "root",
  storage: localStorageLib,
  blacklist: ["user"],
};

const sessionStorageConfiguration = {
  key: "user",
  storage: sessionStorageLib,
};

const rootReducer = combineReducers({
  shoppingCart: shoppingCartReducer,
  user: persistReducer(sessionStorageConfiguration, useReducer),
});

const persistedReducer = persistReducer(localStorageConfiguration, rootReducer);

export const ReduxPersistStore = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(ReduxPersistStore);