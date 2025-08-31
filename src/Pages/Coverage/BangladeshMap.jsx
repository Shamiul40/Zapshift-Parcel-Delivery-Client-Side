import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import districts from "../../Data/district.json"

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
  iconUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
});


const BangladeshMap = () => {
  return (
    <div className="p-4">
      <MapContainer
        center={[23.685, 90.3563]} // center on Bangladesh
        zoom={7}
        className="h-[80vh] w-full rounded-2xl shadow-lg"
      >
        {/* Map tiles */}
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&copy; OpenStreetMap contributors"
        />

        {/* Markers for each district */}
        {districts.map((item, idx) => (
          <Marker
            key={idx}
            position={[item.latitude, item.longitude]}
          >
            <Popup>
              <div className="p-2">
                <h2 className="font-bold text-lg">{item.district}</h2>
                <p className="text-sm text-gray-600">
                  <b>City:</b> {item.city}
                </p>
                <p className="text-sm">
                  <b>Covered Areas:</b> {item.covered_area.join(", ")}
                </p>
                <a
                  href={item.flowchart}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-xs btn-primary mt-2"
                >
                  View Flowchart
                </a>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default BangladeshMap;