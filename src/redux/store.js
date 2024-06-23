// app/store.js
import { configureStore } from '@reduxjs/toolkit';
import currencyReducer from '../redux/slices/currencySlice';
import languageReducer from '../redux/slices/languageSlice';
import brandsReducer from '../redux/slices/brandsSlice';
import authSlice from '../redux/slices/authSlice';
import todoSlice from '../redux/slices/todoSlice';
import {apiSlice} from '../redux/slices/apiSlice';

const store = configureStore({
  reducer: {
    currency: currencyReducer,
    language: languageReducer,
    brands: brandsReducer,
    auth: authSlice,
        todos: todoSlice,
        [apiSlice.reducerPath]: apiSlice.reducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware)
});
export default store 