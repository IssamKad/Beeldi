// src/redux/reducers/checkpointReducer.js
import { createReducer } from '@reduxjs/toolkit';
import {
  fetchCheckpointsRequest,
  fetchCheckpointsSuccess,
  fetchCheckpointsFailure,
} from '../actions/checkpointActions';

const initialState = {
  checkpoints: [],
  loading: false,
  error: null,
};

const checkpointReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(fetchCheckpointsRequest, (state) => {
      state.loading = true;
      state.error = null;
    })
    .addCase(fetchCheckpointsSuccess, (state, action) => {
      state.loading = false;
      state.checkpoints = action.payload;
    })
    .addCase(fetchCheckpointsFailure, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
});

export default checkpointReducer;
