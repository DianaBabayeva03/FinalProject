import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  selectedBranch: {
    name: '',
    address: 'Qaradağ ray. Lökbatan qəs. Seymur Orucov 58A AzeriExpress filial',
    workingHours: 'Həftə içi: 10:00 - 19:00 / Şənbə: 10:00 - 16:00',
    coordinates: "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3041.6211650440437!2d49.726865600000004!3d40.3285645!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDDCsDE5JzQyLjgiTiA0OcKwNDMnMzYuNyJF!5e0!3m2!1str!2saz!4v1717848071672!5m2!1str!2saz", // Azerbaycan koordinatlari
  },
};

const branchSlice = createSlice({
  name: 'branch',
  initialState,
  reducers: {
    selectBranch: (state, action) => {
      state.selectedBranch = action.payload;
    },
  },
});

export const { selectBranch } = branchSlice.actions;
export default branchSlice.reducer;
