import React, { useState, useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar.jsx'
import Home from './pages/Home.jsx'
import Login from './pages/Login.jsx'
import Profile from './pages/Profile.jsx'
import ProtectedRoute from './components/ProtectedRoute.jsx'
import './App.css';

const tweetsIniciales = [
  {
    id: 1,
    author: "Ada Lovelace",
    text: "¡El motor analítico teje patrones algebraicos igual que el telar de Jacquard teje flores y hojas! 💻✨",
    likes: 42,
    date: "Hace 2h",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&auto=format&fit=crop&q=80"
  },
  {
    id: 2,
    author: "Alan Turing",
    text: "Las máquinas pueden sorprendernos a menudo. El aprendizaje y la recursión son la clave del futuro. 🤖",
    likes: 38,
    date: "Hace 4h",
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&auto=format&fit=crop&q=80"
  }
];

function App() {
  const [user, setUser] = useState(() => {
    const saved = localStorage.getItem("twitter_user_session");
    return saved ? JSON.parse(saved) : null;
  });

  const [tweets, setTweets] = useState(() => {
    const saved = localStorage.getItem("twitter_tweets_data");
    return saved ? JSON.parse(saved) : tweetsIniciales;
  });

  useEffect(() => {
    localStorage.setItem("twitter_tweets_data", JSON.stringify(tweets));
  }, [tweets]);

  const handleLogin = (userData) => {
    setUser(userData);
    localStorage.setItem("twitter_user_session", JSON.stringify(userData));
  };

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem("twitter_user_session");
  };

  const handleAddTweet = (text) => {
    if (!user) return;
    const nuevoTweet = {
      id: Date.now(),
      author: user.username,
      text,
      likes: 0,
      date: "Hace unos instantes",
      avatar: user.avatar
    };
    setTweets([nuevoTweet, ...tweets]);
  };

  const handleLike = (id) => {
    setTweets(
      tweets.map((t) => (t.id === id ? { ...t, likes: t.likes + 1 } : t))
    );
  };

  const handleDeleteTweet = (id) => {
    setTweets(tweets.filter((t) => t.id !== id));
  };

  return (
    <div className="twitter-layout">
      <Navbar user={user} onLogout={handleLogout} />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              user={user}
              tweets={tweets}
              onAddTweet={handleAddTweet}
              onLike={handleLike}
              onDelete={handleDeleteTweet}
            />
          }
        />
        <Route
          path="/login"
          element={user ? <Navigate to="/" replace /> : <Login onLogin={handleLogin} />}
        />
        <Route
          path="/profile"
          element={
            <ProtectedRoute user={user}>
              <Profile
                user={user}
                tweets={tweets}
                onLike={handleLike}
                onDelete={handleDeleteTweet}
              />
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  );
}

export default App;