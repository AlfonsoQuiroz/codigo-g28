import { Navigate } from "react-router-dom";

/**
 * Componente para rutas públicas (Login, SignUp)
 * Si el usuario YA está autenticado (tiene access_token), redirige a /app
 * Si NO está autenticado, permite acceso a la ruta pública (children)
 */
function PublicRoute({ children }) {
  const accessToken = localStorage.getItem("access_token");

  // Si ya hay token, redirigir a la app (usuario ya autenticado)
  if (accessToken) {
    return <Navigate to="/app" replace />;
  }

  // Si no hay token, permitir acceso a la ruta pública (login/signup)
  return children;
}

export default PublicRoute;