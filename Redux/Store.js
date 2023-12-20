const { configureStore } = require('@reduxjs/toolkit')
import shoppingCartReducer from './features/shoppingCart/ShoppingCartSlice'
export const Store = configureStore({
  reducer: {
    shoppingCart: shoppingCartReducer,
  },
})
