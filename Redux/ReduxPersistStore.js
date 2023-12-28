import {combineReducers, configureStore} from "@reduxjs/toolkit";
import localStorageLib from "redux-persist/lib/storage";
import { persistStore, persistReducer, createTransform, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';

import shoppingCartReducer from "./features/shoppingCart/ShoppingCartSlice.jsx";
import useReducer from "@/Redux/features/user/UsersSlice";

const userTransform = createTransform(
    (inboundState, key) => {
        if (key === 'user') {
            return { token: inboundState.token };
        }
        return inboundState;
    },
    (outboundState) => outboundState,
);

const persistConfig = {
    key: 'root',
    storage:localStorageLib,
    whitelist: ['user' , 'shoppingCart'],
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