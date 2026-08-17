import { useParams } from "react-router";
import contenidos from "../data/contenidos";
import Error from "./NotFound";
import NotFound from "./NotFound";

const Detalle = () => {
  const { id } = useParams();

  const contenido = contenidos.find((contenido) => contenido.id === Number(id));

  if (!contenido) {
    return <NotFound />;
  }

  const { titulo, descripcion, autor, imagen, anio } = contenido;

  return (
    <section>
      <picture>
        <img src={imagen} alt={titulo} />
      </picture>
      <h1>{titulo}</h1>
      <p>{descripcion}</p>
      <p>{autor}</p>
      <p>{anio}</p>
    </section>
  );
};

export default Detalle;
{
}
