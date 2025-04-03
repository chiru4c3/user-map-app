import { useParams, useNavigate } from 'react-router-dom';
import MapView from './MapView';
import './ProfileMap.css'; 
function ProfileMap({ users }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const user = users.find(u => u.id === parseInt(id));

  if (!user) {
    return <div>User not found</div>;
  }

  return (
    <div className="profile-map-container">
    <img src={user.image} alt={user.name} className="profile-image" />
      <h2>{user.name}</h2>
      <p><strong>Job:</strong> {user.job}</p>
      <p><strong>Summary:</strong> {user.summary}</p>
      <button onClick={() => navigate('/')}>⬅ Back to Home</button>
      <MapView users={[user]} selectedUser={user} />
    </div>
  );
}
export default ProfileMap;
