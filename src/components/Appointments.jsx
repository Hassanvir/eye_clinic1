import React, { useState } from 'react';
import LocationsPanel from '../sections/LocationsPanel';
import Map from '../sections/Map';
// import LocationsPanel from './LocationsPanel';

const locations = [
  { id: 1, name: "Edmonton North East", lat: 53.59598753884238, lng: -113.41701917739202 },
  { id: 2, name: "Edmonton North West", lat: 53.57880144326861, lng: -113.58144793855239 },
  { id: 3, name: "Edmonton South", lat: 53.4554961647276, lng: -113.46969903163784 },
  { id: 4, name: "Edmonton West", lat: 53.509910771861314, lng: -113.68582877103982 },
  { id: 5, name: "Calgary North East", lat: 51.07931771878426, lng: -113.99108142570084 },
  { id: 6, name: "Calgary South", lat: 50.98932463443588, lng: -114.04640972007842 },
  { id: 7, name: "Calgary North West", lat: 51.15486350724773, lng: -114.15548974951503 },
];

const Appointments = () => {
  const [selectedLocation, setSelectedLocation] = useState(null);

  return (
    <div id="counter" className="appointments-layout">

      <LocationsPanel
        locations={locations}
        selectedLocation={selectedLocation}
        setSelectedLocation={setSelectedLocation}
      />

      <div className="map-panel">
        <Map
          selectedLocation={selectedLocation}
          setSelectedLocation={setSelectedLocation}
        />
      </div>

    </div>
  );
};

export default Appointments;