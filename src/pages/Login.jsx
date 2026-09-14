import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

function Login({ onLogin }) {
  const [username, setUsername] = useState('');
  const [bio, setBio] = useState('Desarrollador de software en formación React.');
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || '/';

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!username.trim()) {
      alert("Por favor escribe tu nombre de usuario.");
      return;
    }

    const userData = {
      username: username.trim(),
      bio,
      avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&auto=format&fit=crop&q=80",
      joinedDate: new Date().toLocaleDateString('es-ES', { month: 'long', year: 'numeric' })
    };

    onLogin(userData);
    navigate(from, { replace: true });
  };

  return (
    <div className="login-card">
      <div style={{ fontSize: '3rem', marginBottom: '12px' }}>🐦</div>
      <h2 style={{ fontSize: '1.8rem', color: '#eff3f4', marginBottom: '8px' }}>
        Iniciar Sesión en Twitter
      </h2>
      <p style={{ color: '#8899a6', fontSize: '0.9rem', marginBottom: '24px' }}>
        Sistema simulado de autenticación con persistencia en <code>localStorage</code> y protección de rutas.
      </p>

      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
        <input
          type="text"
          placeholder="Nombre de usuario (ej. alex_dev)"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Biografía breve"
          value={bio}
          onChange={(e) => setBio(e.target.value)}
        />
        <button
          type="submit"
          className="btn-tweet"
          style={{ width: '100%', padding: '12px', fontSize: '1rem', marginTop: '8px' }}
        >
          Entrar a Twitter
        </button>
      </form>
    </div>
  );
}

export default Login;