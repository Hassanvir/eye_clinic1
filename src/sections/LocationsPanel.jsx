const LocationsPanel = ({ locations, selectedLocation, setSelectedLocation }) => {
  return (
    <div className="locations-panel">
      {locations.map(loc => (
        <div
          key={loc.id}
          className={`location-card ${
            selectedLocation?.id === loc.id ? 'active' : ''
          }`}
          onClick={() => setSelectedLocation(loc)}
        >
          <h3>{loc.name}</h3>
          <p>{loc.address}</p>
        </div>
      ))}
    </div>
  );
};

export default LocationsPanel;