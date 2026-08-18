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
    <section className="max-w-5xl mx-auto px-6 py-10">
      <article className="bg-white rounded-xl shadow-md overflow-hidden md:flex">
        <div className="md:w-2/5">
          <img
            src={imagen}
            alt={titulo}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="p-8 md:w-3/5">
          <h1 className="text-3xl font-bold text-amber-900 mb-4">{titulo}</h1>

          <p className="text-stone-700 mb-6 leading-relaxed">{descripcion}</p>

          <p className="text-stone-800 mb-2">
            <span className="font-semibold">Autor / Artista:</span> {autor}
          </p>

          <p className="text-stone-800">
            <span className="font-semibold">Año:</span> {anio}
          </p>
        </div>
      </article>
    </section>
  );
};

export default Detalle;
{
}
