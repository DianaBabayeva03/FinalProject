import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchDeclarations = createAsyncThunk(
  'declarations/fetchDeclarations',
  async () => {
    const response = await fetch('/api/customs-declarations');
    return response.json();
  }
);

const declarationsSlice = createSlice({
  name: 'declarations',
  initialState: {
    loading: false,
    declarations: [],
    error: '',
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchDeclarations.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchDeclarations.fulfilled, (state, action) => {
        state.loading = false;
        state.declarations = action.payload;
        state.error = '';
      })
      .addCase(fetchDeclarations.rejected, (state, action) => {
        state.loading = false;
        state.declarations = [];
        state.error = action.error.message;
      });
  },
});

export default declarationsSlice.reducer;
