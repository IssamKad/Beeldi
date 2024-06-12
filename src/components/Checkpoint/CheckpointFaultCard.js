import React from 'react'

function CheckpointFaultCard({checkpoint}) {
  return (
    <div className="card text-white m-3 col-md-4 bg-primary" style={{maxWidth: "18rem"}}>
        <div class="card-header">{checkpoint.name}</div>
        <div className="card-body" style={{ textAlign:'center'}}>
          <p className="card-text">
            <ul className="checkpoint-list">
              <li><strong>Défaut:</strong> {checkpoint.fault}</li>
              <li><strong>Recommandation:</strong> {checkpoint.recommendation || 'Vide'}</li>
              <li><strong>Photo:</strong>{checkpoint.photo &&
                   <img height="100" width="100" src={checkpoint.photo} alt="EquipmentCheckpoint" />
                   }</li>
            </ul>
          </p>
        </div>
    </div>
  )
}

export default CheckpointFaultCard