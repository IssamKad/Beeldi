import { configureStore } from '@reduxjs/toolkit';
import equipmentReducer from './reducers/equipmentReducer';
import checkpointReducer from './reducers/checkpointReducer';

const rootReducer = {
    equipment: equipmentReducer,
    checkpoints: checkpointReducer
  };
const store = configureStore({
    reducer: rootReducer
});

export default store;
