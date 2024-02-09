import React from "react";

function CovoiturageOffer({ startAddress, endAddress, driverName, availableSeats }) {
  return (
    <div className="covoiturage-offer">
      <div className="header">
        <h2>#Nom du conducteur#</h2>
      </div>
      <p><strong>Start Address:</strong> {startAddress}</p>
      <p><strong>End Address:</strong> {endAddress}</p>
      <p><strong>Car:</strong> {driverName}</p>
      <p><strong>Available places:</strong> {availableSeats}</p>
      <button className="reserve-button">Reserve</button>
    </div>
  );
}

export default CovoiturageOffer;
