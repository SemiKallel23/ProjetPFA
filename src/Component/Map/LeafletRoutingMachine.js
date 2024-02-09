import React, { useEffect, useRef } from "react";
import L from "leaflet";
import "leaflet-routing-machine";
import "leaflet-routing-machine/dist/leaflet-routing-machine.css";
import { useMap } from "react-leaflet";

const LeafletRoutingMachine = () => {
  const map = useMap();
  const markerRef = useRef(null);

  useEffect(() => {
    // Initialiser le marqueur à la position initiale
    markerRef.current = L.marker([34.8387, 10.7531]).addTo(map);

    map.on("click", function (e) {
      // Retirer le marqueur précédent s'il existe
      if (markerRef.current) {
        map.removeLayer(markerRef.current);
      }

      // Ajouter un nouveau marqueur à la position du clic
      markerRef.current = L.marker([e.latlng.lat, e.latlng.lng]).addTo(map);

      L.Routing.control({
        waypoints: [
          L.latLng(34.8387, 10.7531),
          L.latLng(e.latlng.lat, e.latlng.lng),
        ],
        lineOptions: {
          styles: [
            {
              color: "blue",
              weight: 4,
              opacity: 0.7,
            },
          ],
        },
        routeWhileDragging: false,
        geocoder: L.Control.Geocoder.nominatim(),
        addWaypoints: false,
        draggableWaypoints: false,
        fitSelectedRoutes: true,
        showAlternatives: true,
      })
        .on("routesfound", function (e) {
          e.routes[0].coordinates.forEach((c, i) => {
            setTimeout(() => {
              // Mettre à jour la position du marqueur pendant le déplacement
              markerRef.current.setLatLng([c.lat, c.lng]);
            }, 500 * i);
          });
        })
        .addTo(map);
    });

    // Nettoyer la couche lors du démontage du composant
    return () => {
      map.removeLayer(markerRef.current);
    };
  }, [map]);

  return null;
};

export default LeafletRoutingMachine;
