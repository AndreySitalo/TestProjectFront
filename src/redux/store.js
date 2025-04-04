import { configureStore } from '@reduxjs/toolkit';
import ProductsReducer from './productsReduser';

export default configureStore({
  reducer: {
    productsReducer: ProductsReducer,
  },
});
