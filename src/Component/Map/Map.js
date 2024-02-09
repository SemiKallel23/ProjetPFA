import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "./App.css";
import L from "leaflet";
import "leaflet-control-geocoder/dist/Control.Geocoder.js";
import "leaflet-control-geocoder/dist/Control.Geocoder.css";
import LeafletRoutingMachine from "./LeafletRoutingMachine";


function Map () {
    const position = [34.8387, 10.7531]
    return (
        <div>
            <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    <LeafletRoutingMachine />
  </MapContainer>
        </div>
    )
}

let DefaultIcon = L.icon({
    iconUrl: "https://unpkg.com/leaflet@1.6.0/dist/images/marker-icon.png",
    iconSize: [25, 41],
    iconAnchor: [10, 41],
    popupAnchor: [2, -40],
  });
  L.Marker.prototype.options.icon = DefaultIcon;

export default Map ;