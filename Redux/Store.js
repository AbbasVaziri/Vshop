import {configureStore} from "@reduxjs/toolkit";

import shoppingCartReducer from './features/shoppingCart/ShoppingCartSlice';
import userReducer from './features/users/UsersSlice';

export const Store = configureStore({
  reducer: {
    shoppingCart: shoppingCartReducer,
    user: userReducer,
  },
})
