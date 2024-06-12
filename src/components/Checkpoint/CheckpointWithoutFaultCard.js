import React from 'react'

function CheckpointWithoutFaultCard({checkpoint}) {
  return (
    <div className="card text-white m-3 col-md-4 bg-danger" style={{maxWidth: "18rem"}}>
        <div className="card-body" style={{ textAlign:'center', alignContent: 'center'}}>
        <h6 class="card-title">{checkpoint.name}</h6>
        </div>
    </div>
  )
}

export default CheckpointWithoutFaultCard