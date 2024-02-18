import React from "react";
import Icon from "../Icon/Icon";

function CovoiturageOffer({ startAddress, 
  endAddress,
  departTime, 
  arrivalTime, 
  driverName, 
  availableSeats, 
  car, 
  createReservationApi, 
  idRoute, 
  idDriver }) 
  {
  console.log('idDriver',idDriver);
  return (
    <div className="covoiturage-offer">
      <div className="header">
        <h2>{driverName}</h2>
      </div>
      <p><strong>Start Address:</strong> {startAddress}</p>
      <p><strong>Depart Time:</strong> {departTime}</p>
      <p><strong>End Address:</strong> {endAddress}</p>
      <p><strong>Arrival Time:</strong> {arrivalTime}</p>
      <p><strong>Car:</strong> {car}</p>
      <p><strong>Available places:</strong> {availableSeats}</p>
      <button className="reserve-button" onClick={() => createReservationApi(idRoute, idDriver)}>Reserve</button>
      <button className="whatsapp-button" style={{marginLeft:15}}>
      <Icon color={"green"} iconName={"whatsapp"} size={"16"} />
          <a href={`https://wa.me/${"+21688445645"}`}> Contact</a>
      </button>
      
    </div>
  );
}

export default CovoiturageOffer;
