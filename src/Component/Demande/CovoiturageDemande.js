import React from "react";

function CovoiturageDemande({
  passengerName,
  startAddress,
  departTime,
  endAddress,
  arrivalTime,
  

}) 
  
  {return (
    <div className="covoiturage-offer">
      <div className="header">
        <h2>{passengerName}</h2>
      </div>
      <p><strong>Start Address:</strong> {startAddress}</p>
      <p><strong>Depart Time:</strong> {departTime}</p>
      <p><strong>End Address:</strong> {endAddress}</p>
      <p><strong>Arrival Time:</strong> {arrivalTime}</p>
      <button className="reserve-button">Accept</button>
      <button className="reject-button">Reject</button>
    </div>
  );
}

export default CovoiturageDemande;
