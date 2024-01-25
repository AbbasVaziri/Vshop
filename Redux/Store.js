import shoppingCartReducer from './features/shoppingCart/ShoppingCartSlice';
import userReducer from '@/Redux/features/user/UsersSlice';
import {configureStore} from "@reduxjs/toolkit";

export const Store = configureStore({
  reducer: {
    shoppingCart: shoppingCartReducer,
    user: userReducer,
  },
})