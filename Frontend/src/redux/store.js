import { configureStore } from '@reduxjs/toolkit';
import menuReducer from '../redux/slices/menuSlice';
import currencyReducer from '../redux/slices/currencySlice';
import languageReducer from '../redux/slices/languageSlice';
import brandsReducer from '../redux/slices/brandsSlice';
import authReducer from '../redux/slices/authSlice';
import { apiSlice } from '../redux/slices/apiSlice';
import branchReducer from '../redux/slices/branchSlice';
import shopsReducer from '../redux/slices/shopsSlice';
import userReducer from '../redux/slices/userSlice';
import declarationsReducer from '../redux/slices/declarationSlice';
import faqReducer from '../redux/slices/faqSlice';
import { newsApiSlice } from '../redux/slices/newsApiSlice'; // newsApiSlice'ı import et

const store = configureStore({
  reducer: {
    menu: menuReducer,
    branch: branchReducer,
    currency: currencyReducer,
    language: languageReducer,
    brands: brandsReducer,
    shops: shopsReducer,
    user: userReducer,
    auth: authReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
    declarations: declarationsReducer,
    faq: faqReducer,
    [newsApiSlice.reducerPath]: newsApiSlice.reducer, // newsApiSlice'ı reducer olarak ekle
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware),
});

export default store;
