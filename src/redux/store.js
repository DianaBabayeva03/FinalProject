// app/store.js
import { configureStore } from '@reduxjs/toolkit';
import currencyReducer from '../redux/slices/currencySlice';
import languageReducer from '../redux/slices/languageSlice'

const store = configureStore({
  reducer: {
    currency: currencyReducer,
    language: languageReducer,
  },
});
export default store 