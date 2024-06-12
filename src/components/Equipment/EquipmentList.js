import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';

export default function EquipmentList({ equipmentList, itemsPerPage = 10 }) {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(equipmentList.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage, equipmentList.length);
  const currentPageItems = equipmentList.slice(startIndex, endIndex);

  useEffect(()=>{
    setCurrentPage(1);
  }, [equipmentList])
  console.log(
    totalPages,
    startIndex,
    endIndex,
    currentPageItems)

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div>
      <table className="table text-center">
        <thead>
          <tr>
            <th></th>
            <th>Nom</th>
            <th>Domaine</th>
            <th>Défauts</th>
            <th>Détails</th>
          </tr>
        </thead>
        <tbody>
          {currentPageItems.map((equipment) => (
            <tr key={equipment.id}>
              <td><img src={equipment.photo} alt="Equipment" width="100" /></td>
              <td className="align-middle">{equipment.name}</td>
              <td className="align-middle">{equipment.domain}</td>
              <td className="align-middle">{equipment.nbFaults}</td>
              <td className="align-middle">
                <Link to={`/equipments/${equipment.id}`} className="btn btn-success">
                  <FontAwesomeIcon icon={faEye} style={{marginRight: '7px'}} />
                  Voir
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <nav aria-label="Page navigation">
        <ul className="pagination justify-content-center">
          {Array.from({ length: totalPages }, (_, index) => (
            <li key={index} className={`page-item ${currentPage === index + 1 ? 'active' : ''}`}>
              <button className="page-link" onClick={() => handlePageChange(index + 1)}>{index + 1}</button>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
