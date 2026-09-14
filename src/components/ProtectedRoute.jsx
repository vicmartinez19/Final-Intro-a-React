import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';

/**
 * Componente Route Guard: ProtectedRoute
 * Protege vistas que requieren autenticación previa.
 * Si el usuario no está logueado, redirige a /login recordando de dónde venía.
 */
function ProtectedRoute({ user, children }) {
  const location = useLocation();

  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
}

export default ProtectedRoute;