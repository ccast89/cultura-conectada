import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { Link } from "react-router";
import { IoIosMail } from "react-icons/io";
import { RiLockPasswordFill } from "react-icons/ri";

const Login = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const formSubmit = (data) => {
    const { correo } = data;

    localStorage.setItem("user", JSON.stringify(correo));

    navigate("/");
  };
  return (
    <div className="min-h-screen bg-stone-100 flex items-center justify-center p-4">
      <div className="w-full max-w-sm md:max-w-3xl bg-white rounded-xl shadow-md overflow-hidden">
        <div className="text-center px-4 py-5">
          <h1 className="text-4xl md:text-5xl font-bold text-amber-900 text-shadow-lg/30">
            CULTURA CONECTADA
          </h1>
          <h2 className="text-xl md:text-2xl mt-2 text-stone-800">
            Para acceder, por favor iniciá sesión
          </h2>
        </div>
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-1/2">
            <picture>
              <img
                src="/logo.webp"
                alt="Logo de Cultura Conectada"
                className="w-full h-56 md:h-full object-cover rounded-xl"
              />
            </picture>
          </div>
          <article className="w-full md:w-1/2 p-6 md:p-8">
            <header className="mb-5">
              <h2 className="text-2xl text-center">Inicia Sesión</h2>
            </header>
            <section>
              <form onSubmit={handleSubmit(formSubmit)}>
                <div className="flex flex-col mb-3">
                  <label className="flex items-center gap-2">
                    <IoIosMail />
                    Correo
                  </label>
                  <input
                    type="email"
                    placeholder="example@example.com"
                    className="border border-t border-rose-700 rounded-md px-2 py-1 outline-none focus:ring-1 ring-rose-900"
                    {...register("correo", {
                      required: "El campo es obligatorio",
                      pattern: {
                        value:
                          /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                        message: "Formato de correo inválido",
                      },
                    })}
                  />
                  {errors.correo && (
                    <p className="text-red-500"> {errors.correo.message}</p>
                  )}
                </div>
                <div className="flex flex-col mb-2">
                  <label className="flex items-center gap-2">
                    {" "}
                    <RiLockPasswordFill />
                    Contraseña
                  </label>
                  <input
                    type="password"
                    placeholder="Ingresá tu contraseña"
                    className="border border-t border-rose-700 rounded-md px-2 py-1 outline-none focus:ring-1 ring-rose-900"
                    {...register("password", {
                      required: "Este campo es obligatorio",
                      pattern: {
                        value:
                          /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                        message:
                          "La contraseña debe tener al menos 8 caracteres, una mayúscula, un número y un símbolo",
                      },
                    })}
                  />
                  {errors.password && (
                    <p className="text-red-500">{errors.password.message}</p>
                  )}
                </div>
                <div className="grid">
                  <button className="bg-rose-900 text-white px-5 py-3 mt-2 rounded-lg hover:bg-rose-800">
                    Iniciar
                  </button>
                </div>
              </form>
            </section>
            <footer className="text-center text-gray-500">
              <div>
                <p>¿Todavía no tenés cuenta?</p>
              </div>
              <div>
                <Link
                  to="/register"
                  className="hover:underline hover:text-rose-800"
                >
                  Registrate aquí
                </Link>
              </div>
            </footer>
          </article>
        </div>
      </div>
    </div>
  );
};

export default Login;
