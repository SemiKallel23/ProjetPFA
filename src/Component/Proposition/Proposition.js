// Proposition.js
import React from "react";
import CovoiturageOffer from "./CovoiturageOffer"; // Assurez-vous de mettre le chemin correct

function Proposition() {
  return (
    <div className="position-absolute ps-16 pt-24 pe-24">
      <div className="w-100 h-100 flex flex-col">
        <div className="flex-grow-1">
          
          {/* Intégration du composant d'offre de covoiturage */}
          <CovoiturageOffer
            startAddress="Adresse de départ"
            endAddress="Adresse d'arrivée"
            driverName="Nom du conducteur"
            availableSeats={3} // Remplacez par le nombre réel de places disponibles
          />
        </div>
      </div>
    </div>
  );
}

export default Proposition;
