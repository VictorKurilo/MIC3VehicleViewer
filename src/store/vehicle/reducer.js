import { createSlice } from '@reduxjs/toolkit';

export const vehicleSlice = createSlice({
  name: 'vehicle',
  initialState: {
    vehicles: [],
    isLoading: false,
  },
  reducers: {
    fetchVehicleInit: (state) => {
      state.isLoading = true;
    },
    fetchVehicleSuccess: (state, action) => {
      state.vehicles.push(action.payload);
    },
    fetchVehicleFailure: (state) => {
      state.isLoading = false;
    },
    clearVehicles: (state) => {
      state.vehicles = [];
    },
    fetchVehicleComplete: (state) => {
      state.isLoading = false;
    },
  },
});

export default vehicleSlice.reducer;
