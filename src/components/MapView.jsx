import { useEffect ,useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import {TailSpin} from 'react-loader-spinner';
import './MapView.css'; 


function MapView({ users, selectedUser }) {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const defaultCenter = [20, 0];

  const handleMapLoadError = () => {
    setError("Failed to load the map. Please try again later.");
    setLoading(false);
  };

  useEffect(() => {
    if (!selectedUser) {
      setError("No user selected.");
      setLoading(false); 
    } else if (!selectedUser.location) {
      setError("Geolocation data not available for this user.");
      setLoading(false); 
    }
  }, [selectedUser]);
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);  
    }, 1000);  
    return () => clearTimeout(timer);  
  }, []);

  return (

    <div>
       {loading && (
        <div className="loading-spinner">
          <TailSpin color="green" height={20} width={20} />
          <p>Loading map...</p>
        </div>
      )}
      {/* Display error message */}
      {error && <div className="error-message">{error}</div>}
    <MapContainer
      center={selectedUser ? [selectedUser.location.lat, selectedUser.location.lng] : defaultCenter}
      zoom={selectedUser ? 5 : 2}
      style={{ height: "400px", width: "100%" }}
      whenCreated={(map) => {
        map.on('load', () => {
          console.log("Map Loaded!");
          setLoading(false); 
        });
      }}
      onError={handleMapLoadError}  
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {users.map(user => (
        <Marker key={user.id} position={[user.location.lat, user.location.lng]}>
          <Popup>
            <strong>{user.name}</strong><br />
            {user.summary}
          </Popup>
        </Marker>
      ))}
    </MapContainer>
    </div>
  );
}

export default MapView;
