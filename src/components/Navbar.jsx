import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar({ user, onLogout }) {
  return (
    <nav className="twitter-nav">
      <NavLink to="/" className="twitter-logo">
        🐦 <span>Twitter React</span>
      </NavLink>

      <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
        <NavLink to="/" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
          Inicio
        </NavLink>

        {user ? (
          <>
            <NavLink to="/profile" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
              Mi Perfil
            </NavLink>
            <div className="twitter-user-chip">
              <img
                src={user.avatar || "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100"}
                alt={user.username}
                className="avatar-sm"
              />
              <button
                onClick={onLogout}
                style={{ background: 'transparent', color: '#f87171', border: '1px solid rgba(239,68,68,0.3)', padding: '4px 10px', fontSize: '0.8rem' }}
              >
                Salir
              </button>
            </div>
          </>
        ) : (
          <NavLink
            to="/login"
            style={{ background: '#1d9bf0', color: 'white', padding: '6px 16px', borderRadius: '9999px', textDecoration: 'none', fontWeight: 700, fontSize: '0.85rem' }}
          >
            Iniciar Sesión
          </NavLink>
        )}
      </div>
    </nav>
  );
}

export default Navbar;