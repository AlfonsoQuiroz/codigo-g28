import { Navigate, Link } from "react-router-dom";

/**
 * Componente que protege rutas verificando si existe un access_token
 * Si existe el token, permite el acceso a la ruta (children)
 * Si no existe, redirige al login
 */
function ProtectedRoute({ children }) {
  const accessToken = localStorage.getItem("access_token");
  const user = localStorage.getItem("user"); // null o string

  // Si no hay token, redirigir al login
  if (!accessToken) {
    return <Navigate to="/login" replace />;
  }

  const userParse = JSON.parse(user);

  const firstLetter = userParse.nombre.substring(0, 1);

  // Si hay token, permitir acceso a la ruta protegida
  return (
    <>
      <nav className="flex justify-between items-center py-5 px-10 border-b border-gray-300">
        <Link to={"/app"}>Inicio</Link>
        <Link to={"/profile"} className="flex items-center gap-3">
          <div className="w-10 h-10 flex text-lg font-bold justify-center items-center rounded-full bg-blue-300">
            {firstLetter}
          </div>
          <div>
            <p className="text-sm">{userParse.nombre}</p>
            <p className="text-xs">{userParse.email}</p>
          </div>
        </Link>
      </nav>
      {children}
    </>
  );
}

export default ProtectedRoute;