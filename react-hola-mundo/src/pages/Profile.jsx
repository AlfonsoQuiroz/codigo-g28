import { useNavigate } from "react-router-dom";
import { cambiarPassword } from "../services/auth";

function Profile() {
  const user = JSON.parse(localStorage.getItem("user"));

  const navigate = useNavigate();

  const handleChangePassword = async (event) => {
    event.preventDefault();
    // event.target = formulario
    const form = new FormData(event.target);

    const body = {
      password_actual: form.get("password_actual"),
      password_nuevo: form.get("password_nuevo"),
      password_confirmacion: form.get("password_confirmacion"),
    };

    const response = await cambiarPassword(body);

    alert(response.message);
  };

  const handleLogout = () => {
    localStorage.clear();
    navigate("/login", { replace: true });
  };

  return (
    <div className="h-screen bg-gray-100">
      <div className="max-w-lg mx-auto pt-5 space-y-10">
        <div>
          <h1 className="text-center text-2xl font-bold">Perfil</h1>
          <div className="mt-5 bg-white rounded-md shadow-md">
            <form className="px-6 py-4 space-y-5">
              <div className="flex flex-col gap-1">
                <label htmlFor="">Nombre</label>
                <input
                  type="text"
                  readOnly
                  className="px-3 py-2 border bg-gray-100 border-gray-300 rounded-md outline-none"
                  value={user.nombre}
                />
              </div>
              <div className="flex flex-col gap-1">
                <label htmlFor="">Email</label>
                <input
                  type="text"
                  readOnly
                  className="px-3 py-2 border bg-gray-100 border-gray-300 rounded-md outline-none"
                  value={user.email}
                />
              </div>
              <div className="text-center">
                <button
                  onClick={handleLogout}
                  className="bg-red-400 text-white px-3 py-2 rounded-md cursor-pointer"
                >
                  Cerrar Sesión
                </button>
              </div>
            </form>
          </div>
        </div>
        <div>
          <h2 className="text-center text-2xl font-bold">
            Actualizar Contraseña
          </h2>
          <div className="mt-5 bg-white rounded-md shadow-md">
            <form
              className="px-6 py-4 space-y-5"
              onSubmit={handleChangePassword}
            >
              <div className="flex flex-col gap-1">
                <label htmlFor="">Password Actual</label>
                <input
                  type="password"
                  name="password_actual"
                  className="px-3 py-2 border bg-gray-100 border-gray-300 rounded-md outline-none"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label htmlFor="">Nuevo Password</label>
                <input
                  type="password"
                  name="password_nuevo"
                  className="px-3 py-2 border bg-gray-100 border-gray-300 rounded-md outline-none"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label htmlFor="">Confirmar Password</label>
                <input
                  type="password"
                  name="password_confirmacion"
                  className="px-3 py-2 border bg-gray-100 border-gray-300 rounded-md outline-none"
                />
              </div>
              <div className="text-center">
                <button
                  type="submit"
                  className="bg-blue-400 text-white px-3 py-2 rounded-md cursor-pointer"
                >
                  Actualizar
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;