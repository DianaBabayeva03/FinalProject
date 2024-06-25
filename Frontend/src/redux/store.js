import { configureStore } from '@reduxjs/toolkit';
import menuReducer from '../redux/slices/menuSlice';
import currencyReducer from '../redux/slices/currencySlice';
import languageReducer from '../redux/slices/languageSlice';
import brandsReducer from '../redux/slices/brandsSlice';
import authSlice from '../redux/slices/authSlice';
import todoSlice from '../redux/slices/todoSlice';
import {apiSlice} from '../redux/slices/apiSlice';
import branchReducer from '../redux/slices/branchSlice';

const store = configureStore({
  reducer: {
    menu: menuReducer,
    branch: branchReducer,
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