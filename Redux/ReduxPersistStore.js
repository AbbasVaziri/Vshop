import {combineReducers, configureStore} from "@reduxjs/toolkit";
import localStorageLib from "redux-persist/lib/storage";
import { persistStore, persistReducer, createTransform, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';

import shoppingCartReducer from "../Redux/features/shoppingCart/ShoppingCartSlice";
import useReducer from "@/Redux/features/user/UsersSlice";

const userTransform = createTransform(
    (inboundState, key) => {
        if (key === 'user') {
            return { token: inboundState.token };
        }
        return inboundState;
    },
    (outboundState, key) => outboundState,
    { whitelist: ['user'] }
);

const persistConfig = {
    key: 'root',
    version: 1,
    storage:localStorageLib,
    whitelist: ['user'],
    transforms: [userTransform],
};

const rootReducer = combineReducers({
  shoppingCart: shoppingCartReducer,
  user: useReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
});

export const persistor = persistStore(store);