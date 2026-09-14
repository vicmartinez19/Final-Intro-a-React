import React, { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Login from './pages/Login.jsx';
import Profile from './pages/Profile.jsx';
import './App.css';

function App() {
  const [user, setUser] = useState(() => {
    const saved = localStorage.getItem("twitter_user_session");
    return saved ? JSON.parse(saved) : null;
  });

  const handleLogin = (userData) => {
    setUser(userData);
    localStorage.setItem("twitter_user_session", JSON.stringify(userData));
  };

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem("twitter_user_session");
  };

  return (
    <div className="twitter-layout">
      <Navbar user={user} onLogout={handleLogout} />
      <Routes>
        <Route path="/" element={<div style={{ padding: '20px', color: 'white' }}>Feed Principal</div>} />
        <Route path="/login" element={user ? <Navigate to="/" replace /> : <Login onLogin={handleLogin} />} />
        <Route path="/profile" element={user ? <Profile user={user} tweets={[]} onLike={() => {}} onDelete={() => {}} /> : <Navigate to="/login" replace />} />
      </Routes>
    </div>
  );
}

export default App;