import { useNavigate } from 'react-router-dom';
import './UserCard.css'; 

function UserCard({ user }) {
  const navigate = useNavigate();

  const handleSummary = () => {
    navigate(`/profile/${user.id}`);
  };

  return (
    <div className="user-card">
       <img src={user.image} alt={user.name} className="user-image" />
      <h3>{user.name}</h3>
      <p>{user.job}</p>
      <button onClick={handleSummary}>Summary</button>
    </div>
  );
}

export default UserCard;

  