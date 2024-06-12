import { createReducer } from '@reduxjs/toolkit';
import {
  fetchEquipmentsRequest,
  fetchEquipmentsSuccess,
  fetchEquipmentsFailure,
} from '../actions/equipmentActions';

const initialState = {
  equipmentList: [],
  loading: false,
  error: null,
};

const equipmentReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(fetchEquipmentsRequest, (state) => {
      state.loading = true;
      state.error = null;
    })
    .addCase(fetchEquipmentsSuccess, (state, action) => {
      state.loading = false;
      state.equipmentList = action.payload;
    })
    .addCase(fetchEquipmentsFailure, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
});

export default equipmentReducer;
