import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { Link } from "react-router";
import { FaUser } from "react-icons/fa";
import { IoCalendarSharp } from "react-icons/io5";
import { IoIosMail } from "react-icons/io";
import { RiLockPasswordFill } from "react-icons/ri";

const Register = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const registerSubmit = (data) => {
    navigate("/login");
  };
  return (
    <div className="min-h-screen bg-stone-100 flex items-center justify-center p-4">
      <div className="w-full max-w-sm md:max-w-3xl bg-white rounded-xl shadow-md overflow-hidden">
        <div className="text-center px-4 py-5">
          <h1 className="text-4xl md:text-5xl font-bold text-amber-900 text-shadow-lg/30">
            CULTURA CONECTADA
          </h1>
          <h2 className="text-xl md:text-2xl mt-2 text-stone-800">
            Creá tu cuenta y accedé a todo el contenido
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
              <h2 className="text-2xl text-center">
                Formá parte de la comunidad
              </h2>
            </header>
            <section>
              <form onSubmit={handleSubmit(registerSubmit)}>
                <div className="flex flex-col mb-2">
                  <label className="flex items-center gap-2">
                    <FaUser /> Nombre
                  </label>
                  <input
                    type="text"
                    placeholder="Ingresá tu nombre completo"
                    className="border border-t border-rose-700 rounded-md px-2 py-1 outline-none focus:ring-1 ring-rose-900"
                    {...register("nombre", {
                      required: "El campo es obligatorio",
                      pattern: {
                        value:
                          /^[a-zA-ZáéíóúÁÉÍÓÚñÑüÜ]+(\s+[a-zA-ZáéíóúÁÉÍÓÚñÑüÜ]+)+$/,
                        message: "Ingresá tu nombre y apellido",
                      },
                    })}
                  />
                  {errors.nombre && (
                    <p className="text-red-500"> {errors.nombre.message}</p>
                  )}
                </div>
                <div className="flex flex-col mb-2">
                  <label className="flex items-center gap-2">
                    <IoCalendarSharp />
                    Fecha de Nacimiento
                  </label>
                  <input
                    type="date"
                    className="border border-t border-rose-700 rounded-md px-2 py-1 outline-none focus:ring-1 ring-rose-900 text-gray-500"
                    {...register("fecha", {
                      required: "Este campo es obligatorio",
                    })}
                  />
                  {errors.fecha && (
                    <p className="text-red-500">{errors.fecha.message}</p>
                  )}
                </div>
                <div className="flex flex-col mb-2">
                  <label className="flex items-center gap-2">
                    <IoIosMail />
                    Correo electrónico
                  </label>
                  <input
                    type="email"
                    placeholder="example@example.com"
                    className="border border-t border-rose-700 rounded-md px-2 py-1 outline-none focus:ring-1 ring-rose-900"
                    {...register("correo", {
                      required: "Este campo es obligatorio",
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
                    <RiLockPasswordFill />
                    Creá tu contraseña
                  </label>
                  <input
                    type="password"
                    placeholder="8 caracteres, una mayúscula, un número y símbolo"
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
                    Crear cuenta
                  </button>
                </div>
              </form>
            </section>
            <footer className="text-center text-gray-500 mt-3">
              <div>
                <Link to="/" className="hover:underline hover:text-rose-800">
                  Cancelar
                </Link>
              </div>
            </footer>
          </article>
        </div>
      </div>
    </div>
  );
};

export default Register;
