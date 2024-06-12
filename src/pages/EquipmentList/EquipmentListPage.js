import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchEquipments } from '../../redux/actions/equipmentActions';
import EquipmentList from '../../components/Equipment/EquipmentList';
import SearchBar from '../../components/Equipment/SearchBar';
import Spinner from '../../components/UI/Spinner';

export default function EquipmentListPage() {
  const dispatch = useDispatch();
  const { equipmentList, loading } = useSelector((state) => state.equipment);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    dispatch(fetchEquipments());
  }, [dispatch]);

  const filteredEquipmentList = equipmentList.filter((equipment) =>
    equipment.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    equipment.domain.toLowerCase().includes(searchQuery.toLowerCase())
  );
  return (
    <div className="container">
      <h1>Liste des équipements</h1>
      {loading ?( 
        <Spinner/>
      ) : (
        <div>
          
          <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
          <EquipmentList equipmentList={filteredEquipmentList} />
        </div>
      )}
    </div>
  );
 
}