import React from "react";

function CovoiturageOffer({ startAddress, endAddress, driverName, availableSeats, car, createReservationApi, idRoute, idDriver }) {
  console.log('idDriver',idDriver);
  return (
    <div className="covoiturage-offer">
      <div className="header">
        <h2>{driverName}</h2>
      </div>
      <p><strong>Start Address:</strong> {startAddress}</p>
      <p><strong>End Address:</strong> {endAddress}</p>
      <p><strong>Car:</strong> {car}</p>
      <p><strong>Available places:</strong> {availableSeats}</p>
      <button className="reserve-button" onClick={() => createReservationApi(idRoute, idDriver)}>Reserve</button>
    </div>
  );
}

export default CovoiturageOffer;
