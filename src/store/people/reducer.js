import { createSlice } from '@reduxjs/toolkit';

export const peopleSlice = createSlice({
  name: 'people',
  initialState: {
    people: [],
    count: 0,
    isLoading: false,
  },
  reducers: {
    fetchInit: (state) => {
      state.isLoading = true;
    },
    fetchSuccess: (state, action) => {
      state.people = action.payload.results;
      state.count = Math.ceil(action.payload.count / 10);
      state.isLoading = false;
    },
    fetchFailure: (state) => {
      state.isLoading = false;
    },
  },
});

export default peopleSlice.reducer;
