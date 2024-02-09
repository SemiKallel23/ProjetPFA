import React from "react";

function CovoiturageDemande() {
  return (
    <div className="covoiturage-offer">
      <div className="header">
        <h2>#Nom du passager#</h2>
      </div>
      
      <button className="reserve-button">Accept</button>
      <button className="reject-button">Reject</button>
    </div>
  );
}

export default CovoiturageDemande;
