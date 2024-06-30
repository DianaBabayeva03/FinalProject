import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  openQuestions: []
};

const faqSlice = createSlice({
  name: 'faq',
  initialState,
  reducers: {
    toggleQuestion: (state, action) => {
      const index = state.openQuestions.indexOf(action.payload);
      if (index === -1) {
        state.openQuestions.push(action.payload);
      } else {
        state.openQuestions.splice(index, 1);
      }
    }
  }
});

export const { toggleQuestion } = faqSlice.actions;

export default faqSlice.reducer;
