import React from 'react';
import FaultCard from './CheckpointFaultCard';
import NoFaultCard from './CheckpointWithoutFaultCard';

export default function CheckpointsList({ checkpoints }) {
  return (
    <div>
      <div className='align-left mb-5'><h2>Les points de contrôle</h2></div>
      <div className="row">
        {
          checkpoints.length> 0 ?
          checkpoints.map(
          (checkpoint) => (checkpoint.fault 
            ? <FaultCard checkpoint={checkpoint}/> 
            : <NoFaultCard checkpoint={checkpoint}/>
            )
          )
          :
            <p> Aucun point de contrôle n'est disponible</p>
        }
      </div>
    </div>
  );
}
