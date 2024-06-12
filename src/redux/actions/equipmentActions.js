import { database } from '../../services/firebase';
import { createAction } from '@reduxjs/toolkit';

export const fetchEquipmentsRequest = createAction('fetchEquipmentsRequest');
export const fetchEquipmentsSuccess = createAction('fetchEquipmentsSuccess');
export const fetchEquipmentsFailure = createAction('fetchEquipmentsFailure');

export const fetchEquipments = () => async (dispatch) => {
  dispatch(fetchEquipmentsRequest());
  try {
    const equipmentsRef = database.ref('Equipments');
    const snapshot = await equipmentsRef.orderByChild('name').once('value');
    const data = snapshot.val();
    if (data) {
      const equipmentArray = Object.keys(data).map((key) => ({
        id: key,
        ...data[key],
      }));
      equipmentArray.sort(
        (a, b) => a.name.localeCompare(b.name, undefined, {
          ignorePunctuation: true,
          sensitivity: 'base',
        })
      );
      dispatch(fetchEquipmentsSuccess(equipmentArray));
    }
  } catch (error) {
    dispatch(fetchEquipmentsFailure(error.message));
  }
};
