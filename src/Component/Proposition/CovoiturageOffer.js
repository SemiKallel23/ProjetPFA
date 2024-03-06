import React, { useState } from "react";
import Icon from "../Icon/Icon";

function CovoiturageOffer({ 
  startAddress, 
  endAddress,
  departTime, 
  arrivalTime, 
  driverName, 
  availableSeats, 
  car, 
  matricule,
  createReservationApi, 
  idRoute, 
  idDriver,
  phoneNumber }) 
{
  const [showPopup, setShowPopup] = useState(false);
  const [buttonText, setButtonText] = useState("Reserve");
  const [buttonColor, setButtonColor] = useState("");

  const handleReservation = () => {
    createReservationApi(idRoute, idDriver);
    setButtonText("Waiting...");
    setButtonColor("orange");
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

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
      <p><strong>Registration number:</strong> {matricule}</p>
      <p><strong>Available places:</strong> {availableSeats}</p>
      <button 
        className="reserve-button" 
        style={{ backgroundColor: buttonColor }}
        disabled={buttonText === "Waiting..."}
        onClick={handleReservation}
      >
        <Icon iconName={"circle-right"} /> {buttonText}
      </button>
      
      {showPopup && (
        <div className="popup">
          <p>Reservation sent successfully !</p>
          <button onClick={handleClosePopup} style={{ display: 'block', margin: '0 auto' }}>Close</button>
        </div>
      )}
      
      <button className="whatsapp-button" style={{ marginLeft: 15 }}>
        <Icon color={"green"} iconName={"whatsapp"} />
        <a href={`https://wa.me/${"+216"+phoneNumber}`} style={{ textDecoration: 'none', color: 'white' }} target="_blank" rel="noopener noreferrer"> Contact </a>
      </button>
    </div>
  );
}

export default CovoiturageOffer;
