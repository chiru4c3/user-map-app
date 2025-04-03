import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AdminPanel.css';

function AdminPanel({ users, addUser, deleteUser }) {
  const [formData, setFormData] = useState({ name: '', job: '', summary: '', lat: '', lng: '' });
  const [formError, setFormError] = useState('');
  const navigate = useNavigate();

  const handleChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = e => {
    e.preventDefault();
     // Validate form data
     if (!formData.name || !formData.job || !formData.lat || !formData.lng) {
      setFormError('Please fill in all required fields.');
      return;
    }
    addUser({
      ...formData,
      id: Date.now(),
      location: { lat: parseFloat(formData.lat), lng: parseFloat(formData.lng) }
    });
    setFormData({ name: '', job: '', summary: '', lat: '', lng: '' });
  };

  return (
    <div className="admin-panel">
      <h2>Admin Panel</h2>
      {formError && <div className="error-message">{formError}</div>}
      <form onSubmit={handleSubmit} className="admin-form">
        <input name="name" placeholder="Name" value={formData.name} onChange={handleChange} />
        <input name="job" placeholder="Job" value={formData.job} onChange={handleChange} />
        <input name="summary" placeholder="Summary" value={formData.summary} onChange={handleChange} />
        <input name="lat" placeholder="Latitude" value={formData.lat} onChange={handleChange} />
        <input name="lng" placeholder="Longitude" value={formData.lng} onChange={handleChange} />
        <button type="submit">Add User</button>
      </form>

      <h3>Existing Users</h3>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            {user.name} - {user.job}
            <button  onClick={() => deleteUser(user.id)}>Delete</button>
          </li>
        ))}
      </ul>

      <button onClick={() => navigate('/')}>Back to Home</button>
    </div>
  );
}

export default AdminPanel;
