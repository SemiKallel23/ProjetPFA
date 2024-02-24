import React from "react";
import Icon from "../Icon/Icon";


function CovoiturageDemande({
  passengerName,
  startAddress,
  departTime,
  endAddress,
  arrivalTime,
  phoneNumber,
  reservationId,
  trajetId,
  acceptReservation,
  createdBy,
  isLoading
}) {
  return (
    <div className="covoiturage-offer">
      <div className="header">
        <h2>{passengerName}</h2>
      </div>
      <p><strong>Start Address:</strong> {startAddress}</p>
      <p><strong>Depart Time:</strong> {departTime}</p>
      <p><strong>End Address:</strong> {endAddress}</p>
      <p><strong>Arrival Time:</strong> {arrivalTime}</p>
      <button disabled={isLoading} className="reserve-button" onClick={() => acceptReservation(reservationId, trajetId, createdBy)}> <Icon iconName={"checkmark"} /> Accept </button>
      <button className="reject-button">  <Icon iconName={"cross"} /> Reject </button>
      <button className="whatsapp-button" style={{ marginLeft: 15 }}>
        <Icon color={"green"} iconName={"whatsapp"} />
        <a href={`https://wa.me/${"+216" + phoneNumber}`} style={{ textDecoration: 'none', color: 'white' }} target="_blank" rel="noopener noreferrer"> Contact </a>
      </button>

    </div>
  );
}

export default CovoiturageDemande;
