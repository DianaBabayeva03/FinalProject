// app/store.js
import { configureStore } from '@reduxjs/toolkit';
import currencyReducer from '../redux/slices/currencySlice';
import languageReducer from '../redux/slices/languageSlice'
import brandsReducer from '../redux/slices/brandsSlice'

const store = configureStore({
  reducer: {
    currency: currencyReducer,
    language: languageReducer,
    brands: brandsReducer,
  },
});
export default store 