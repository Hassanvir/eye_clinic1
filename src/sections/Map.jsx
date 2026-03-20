import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import { useEffect } from 'react';
import 'leaflet/dist/leaflet.css';

import L from 'leaflet';

// Fix Leaflet default icon issue
delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
});

//52.212932316408654, -113.81979731028562


const locations = [
  { id: 1, name: "Edmonton North East", lat: 53.59598753884238, lng: -113.41701917739202 },
  { id: 2, name: "Edmonton North West", lat: 53.57880144326861, lng: -113.58144793855239 },
  { id: 3, name: "Edmonton South", lat: 53.4554961647276, lng: -113.46969903163784 },
  { id: 4, name: "Edmonton West", lat: 53.509910771861314, lng: -113.68582877103982 },

  { id: 5, name: "Calgary North East", lat: 51.07931771878426, lng: -113.99108142570084 },
  { id: 6, name: "Calgary South", lat: 50.98932463443588, lng: -114.04640972007842 },
  { id: 7, name: "Calgary North West", lat: 51.15486350724773, lng: -114.15548974951503 },

  { id: 8, name: "St Albert", lat: 53.67182366147271, lng: -113.63611598004088 },

  { id: 10, name: "Okotoks", lat: 50.70615764348896, lng: -113.94626770351299 },


];

function FlyToLocation({ selectedLocation }) {
  const map = useMap();

  useEffect(() => {
    if (selectedLocation) {
      map.flyTo(
        [selectedLocation.lat, selectedLocation.lng],
        14,
        { duration: 1.5 }
      );
    }
  }, [selectedLocation, map]);

  return null;
}

// 52.26707349234687, -113.91487597605406

const Map = ({ selectedLocation, setSelectedLocation }) => {
  return (
    <MapContainer
      center={[52.26707349234687, -113.91487597605406]}
      zoom={6.5}
      style={{ height: "100%", width: "100%" }}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

      <FlyToLocation selectedLocation={selectedLocation} />

      {locations.map(loc => (
        <Marker
          key={loc.id}
          position={[loc.lat, loc.lng]}
          eventHandlers={{
            click: () => setSelectedLocation(loc)
          }}
        >
          <Popup>{loc.name}</Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default Map;