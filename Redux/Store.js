import {configureStore} from "@reduxjs/toolkit";
import shoppingCartReducer from './features/shoppingCart/ShoppingCartSlice';
import userReducer from '@/Redux/features/user/UsersSlice';

export const Store = configureStore({
  reducer: {
    shoppingCart: shoppingCartReducer,
    user: userReducer,
  },
})
