import React from 'react';

export default function EquipmentInfo({ equipment }) {
  return (
    <div className="equipment-info mb-5 mt-5">
      <div className='align-left mb-5'><h2>Infos de l'équipement</h2></div>
      <div className="row">
        <div className="col-md-4">
          <img src={equipment.photo} alt={equipment.name} className="img-fluid" />
        </div>
        <div className="col-md-8">
          <table className="table">
            <tbody>
              <tr>
                <td className="align-left"><strong>Nom:</strong></td>
                <td className="align-left">{equipment.name}</td>
              </tr>
              <tr>
                <td className="align-left"><strong>Bâtiment:</strong></td>
                <td className="align-left">{equipment.building}</td>
              </tr>
              <tr>
                <td className="align-left"><strong>Domaine:</strong></td>
                <td className="align-left">{equipment.domain}</td>
              </tr>
              <tr>
                <td className="align-left"><strong>Niveau:</strong></td>
                <td className="align-left">{equipment.niveau}</td>
              </tr>
              <tr>
                <td className="align-left"><strong>Local:</strong></td>
                <td className="align-left">{equipment.local}</td>
              </tr>
              <tr>
                <td className="align-left"><strong>Marque:</strong></td>
                <td className="align-left">{equipment.brand}</td>
              </tr>
              <tr>
                <td className="align-left"><strong>Modèle:</strong></td>
                <td className="align-left">{equipment.model}</td>
              </tr>
              <tr>
                <td className="align-left"><strong>Numéro de série:</strong></td>
                <td className="align-left">{equipment.serialNumber}</td>
              </tr>
              <tr>
                <td className="align-left"><strong>Quantité:</strong></td>
                <td className="align-left">{equipment.quantity}</td>
              </tr>
              <tr>
                <td className="align-left"><strong>Statut:</strong></td>
                <td className="align-left">{equipment.status}</td>
              </tr>
              <tr>
                <td className="align-left"><strong>Notes:</strong></td>
                <td className="align-left">{equipment.notes}</td>
              </tr>
              <tr>
                <td className="align-left"><strong>Nombre de défauts:</strong></td>
                <td className="align-left">{equipment.nbFaults}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
