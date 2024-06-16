// src/redux/slices/languageSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  language: 'az', // Varsayılan dil 'az'
};

const languageSlice = createSlice({
  name: 'language',
  initialState,
  reducers: {
    setLanguage: (state, action) => {
      state.language = action.payload;
    },
  },
});

export const { setLanguage } = languageSlice.actions;
export default languageSlice.reducer;
