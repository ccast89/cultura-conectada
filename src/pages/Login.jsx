import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { Link } from "react-router";

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
    <div className="flex justify-center items-center min-h-screen">
      <article className="w-80">
        <header className="mb-5">
          <h1 className="text-2xl text-center">Inicia Sesión</h1>
        </header>
        <section>
          <form onSubmit={handleSubmit(formSubmit)}>
            <div className="flex flex-col mb-2">
              <label>Correo</label>
              <input
                type="email"
                placeholder="example@example.com"
                className="border border-t border-rose-700 rounded-md px-2 py-1 outline-none focus:ring-1 ring-rose-900"
                {...register("correo", {
                  required: "El campo es obligatorio",
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                    message: "Formato de correo inválido",
                  },
                })}
              />
              {errors.correo && (
                <p className="text-red-500"> Este campo es obligatorio</p>
              )}
            </div>
            <div className="flex flex-col mb-2">
              <label>Contraseña</label>
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
        <footer>
          <div>
            <p>¿Todavía no tenés cuenta?</p>
          </div>
          <div>
            <Link to="/register">Registrate aquí</Link>
          </div>
        </footer>
      </article>
    </div>
  );
};

export default Login;
