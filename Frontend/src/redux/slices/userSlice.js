import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: {
    name: 'Diana Babayeva',
    id: 'LUX7836574',
  },
  activeContent: 'personalInformation',
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setActiveContent: (state, action) => {
      state.activeContent = action.payload;
    },
  },
});

export const { setActiveContent } = userSlice.actions;
export default userSlice.reducer;
