import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  brands: [
    { name: 'Marka 1', url: 'https://kargolux.az/storage/shops/197.png' },
    { name: 'Marka 2', url: 'https://kargolux.az/storage/shops/196.png' },
    { name: 'Marka 3', url: 'https://kargolux.az/storage/shops/195.png' },
    { name: 'Marka 4', url: 'https://kargolux.az/storage/shops/194.png' },
    { name: 'Marka 5', url: 'https://kargolux.az/storage/shops/192.png' },
    { name: 'Marka 6', url: 'https://kargolux.az/storage/shops/187.png' },
    { name: 'Marka 7', url: 'https://kargolux.az/storage/shops/201.png' },
    { name: 'Marka 8', url: 'https://kargolux.az/storage/shops/200.png' },
    { name: 'Marka 9', url: 'https://kargolux.az/storage/shops/199.png' },
    { name: 'Marka 10', url: 'https://kargolux.az/storage/shops/198.png' }
  ],
};

const brandsSlice = createSlice({
  name: 'brands',
  initialState,
  reducers: {}
});

export const selectBrands = (state) => state.brands.brands;
export default brandsSlice.reducer;