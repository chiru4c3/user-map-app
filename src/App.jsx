import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import { initialUsers } from './data/initialUsers';
import LandingPage from './components/LandingPage';
import AdminPanel from './components/AdminPanel';
import ProfileMap from './components/ProfileMap';
import './App.css';

function App() {
  const [users, setUsers] = useState(initialUsers);

  const addUser = user => setUsers([...users, user]);
  const deleteUser = id => setUsers(users.filter(user => user.id !== id));

  return (
    <Routes>
      <Route path="/" element={<LandingPage users={users} setUsers={setUsers} />} />
      <Route path="/profile/:id" element={<ProfileMap users={users} />} />

      <Route path="/admin" element={<AdminPanel users={users} addUser={addUser} deleteUser={deleteUser} />} />
    </Routes>
  );
}

export default App;


