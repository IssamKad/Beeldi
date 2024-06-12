import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchEquipments } from '../../redux/actions/equipmentActions';
import { fetchCheckpoints } from '../../redux/actions/checkpointActions';
import './EquipmentDetailPage.css'
import EquipmentInfo from '../../components/Equipment/EquipmentInfo'
import CheckpointsList from '../../components/Checkpoint/CheckpointsList'
import Spinner from '../../components/UI/Spinner'

export default function EquipmentDetailPage() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { equipmentList, loading: loadingEquipment } = useSelector((state) => state.equipment);
  const { checkpoints, loading: loadingCheckpoints } = useSelector((state) => state.checkpoints);
  
  useEffect(() => {
    dispatch(fetchEquipments());
    dispatch(fetchCheckpoints(id));
  }, [dispatch, id]);

  const equipment = equipmentList.find((item) => item.id === id);

  if (loadingEquipment || loadingCheckpoints || !equipment) {
    return <Spinner />;
  }

  return (
    <div className="container">
      <h1>{equipment.name}</h1>
      <EquipmentInfo equipment={equipment} />
      <CheckpointsList checkpoints={checkpoints} />
    </div>
  );
}