import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { Link } from "react-router";

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
    <div className="flex justify-center items-center min-h-screen">
      <article className="w-80">
        <header className="mb-5">
          <h2 className="text-2xl text-center">Creá tu cuenta</h2>
        </header>
        <section>
          <form onSubmit={handleSubmit(registerSubmit)}>
            <div className="flex flex-col mb-2">
              <label>Nombre</label>
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
              <label>Edad</label>
              <input
                type="number"
                placeholder="Ingresá tu edad"
                className="border border-t border-rose-700 rounded-md px-2 py-1 outline-none focus:ring-1 ring-rose-900"
                {...register("edad", {
                  required: "Este campo es obligatorio",
                  pattern: {
                    value: /^(1[0-1][0-9]|12[0-2]|[1-9]?[0-9])$/,
                    message: "Por favor, ingresá tu edad",
                  },
                })}
              />
              {errors.edad && (
                <p className="text-red-500">{errors.edad.message}</p>
              )}
            </div>
            <div className="flex flex-col mb-2">
              <label>Correo electrónico</label>
              <input
                type="email"
                placeholder="example@example.com"
                className="border border-t border-rose-700 rounded-md px-2 py-1 outline-none focus:ring-1 ring-rose-900"
                {...register("correo", {
                  required: "Este campo es obligatorio",
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                    message: "Formato de correo inválido",
                  },
                })}
              />
              {errors.correo && (
                <p className="text-red-500"> {errors.correo.message}</p>
              )}
            </div>
            <div className="flex flex-col mb-2">
              <label>Creá tu contraseña</label>
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
      </article>
    </div>
  );
};

export default Register;
