import { Link } from "react-router";

const NotFound = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-6">
      <h1 className="text-5xl font-bold text-amber-900 mb-4">404</h1>

      <h2 className="text-2xl font-bold text-stone-800 mb-4">
        Página no encontrada
      </h2>

      <p className="text-stone-600 mb-6">
        Lo sentimos, la página que estás buscando no existe o no está
        disponible.
      </p>

      <Link
        to="/"
        className="bg-rose-900 text-white px-5 py-3 rounded-lg hover:bg-rose-800"
      >
        Volver al inicio
      </Link>
    </section>
  );
};

export default NotFound;
