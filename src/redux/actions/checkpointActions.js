import { database } from '../../services/firebase';
import { createAction } from '@reduxjs/toolkit';

export const fetchCheckpointsRequest = createAction('fetchCheckpointsRequest');
export const fetchCheckpointsSuccess = createAction('fetchCheckpointsSuccess');
export const fetchCheckpointsFailure = createAction('fetchCheckpointsFailure');

export const fetchCheckpoints = (equipmentId) => async (dispatch) => {
  dispatch(fetchCheckpointsRequest());
  try {
    const checkpointsRef = database.ref('Checkpoints');
    const snapshot = await checkpointsRef
      .orderByChild('equipmentKey')
      .equalTo(equipmentId)
      .once('value');
    const data = snapshot.val();
    if (data) {
      const checkpointsArray = Object.keys(data).map((key) => ({
        id: key,
        ...data[key],
      }));
      dispatch(fetchCheckpointsSuccess(checkpointsArray));
    }
    else{
      dispatch(fetchCheckpointsSuccess([]));
    }
  } catch (error) {
    dispatch(fetchCheckpointsFailure(error.message));
  }
};