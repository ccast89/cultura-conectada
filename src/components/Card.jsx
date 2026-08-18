import { Link } from "react-router";

const Card = ({ contenido }) => {
  const { id, titulo, autor, imagen, anio } = contenido;

  return (
    <article className="bg-white rounded-xl shadow-md overflow-hidden">
      <img src={imagen} alt={titulo} className="w-full h-48 object-cover" />
      <div className="p-5">
        <h2 className="text-xl font-bold text-amber-900 mb-2">{titulo}</h2>
        <p className="text-stone-700 mb-1">{autor}</p>
        <p className="text-stone-500 mb-4">{anio}</p>
        <Link
          to={`/contenido/${id}`}
          className="inline-block bg-rose-900 text-white px-4 py-2 rounded-lg hover:bg-rose-800"
        >
          Ver detalle
        </Link>
      </div>
    </article>
  );
};

export default Card;
