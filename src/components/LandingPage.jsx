import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import UserCard from './UserCard';
import './LandingPage.css';

function LandingPage({ users, }) {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.job.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="landing-container">
      <header>
        <h1>🌍 Profile Map Explorer</h1>
        <input
          type="text"
          placeholder="Search by name or job"
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
          className="search-bar"
        />
        <button onClick={() => navigate('/admin')} className="admin-btn">Admin Panel</button>
      </header>

      <div className="user-list">
        {filteredUsers.map(user => (
          <UserCard key={user.id} user={user}/>
        ))}
      </div>
    </div>
  );
}

export default LandingPage;
