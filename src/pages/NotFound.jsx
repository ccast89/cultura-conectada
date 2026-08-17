import { Link } from "react-router";

const NotFound = () => {
  return (
    <section>
      <h1>404 - Página no encontrada</h1>

      <p>
        Lo sentimos, la página que estás buscando no existe o no está
        disponible.
      </p>

      <Link to="/">Volver al inicio</Link>
    </section>
  );
};

export default NotFound;
