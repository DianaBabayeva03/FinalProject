// import { configureStore } from '@reduxjs/toolkit';
// import menuReducer from '../redux/slices/menuSlice';
// import currencyReducer from '../redux/slices/currencySlice';
// import languageReducer from '../redux/slices/languageSlice';
// import brandsReducer from '../redux/slices/brandsSlice';
// import authSlice from '../redux/slices/authSlice';
// import todoSlice from '../redux/slices/todoSlice';
// import {apiSlice} from '../redux/slices/apiSlice';
// import branchReducer from '../redux/slices/branchSlice';
// import shopsReducer from '../redux/slices/shopsSlice';

// const store = configureStore({
//   reducer: {
//     menu: menuReducer,
//     branch: branchReducer,
//     currency: currencyReducer,
//     language: languageReducer,
//     brands: brandsReducer,
//     shops: shopsReducer,
//     auth: authSlice,
//         todos: todoSlice,
//         [apiSlice.reducerPath]: apiSlice.reducer
//   },
//   middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware)
// });
// export default store 

import { configureStore } from '@reduxjs/toolkit';
import menuReducer from '../redux/slices/menuSlice';
import currencyReducer from '../redux/slices/currencySlice';
import languageReducer from '../redux/slices/languageSlice';
import brandsReducer from '../redux/slices/brandsSlice';
import authReducer from '../redux/slices/authSlice'; // Düzeltildi
import todoReducer from '../redux/slices/todoSlice';
import { apiSlice } from '../redux/slices/apiSlice';
import branchReducer from '../redux/slices/branchSlice';
import shopsReducer from '../redux/slices/shopsSlice';

const store = configureStore({
  reducer: {
    menu: menuReducer,
    branch: branchReducer,
    currency: currencyReducer,
    language: languageReducer,
    brands: brandsReducer,
    shops: shopsReducer,
    auth: authReducer, // Düzeltildi
    todos: todoReducer, // Düzeltildi
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware),
});

export default store;
