import { Link } from "react-router";

const Card = ({ contenido }) => {
  const { id, titulo, autor, imagen, anio } = contenido;

  return (
    <article>
      <img src={imagen} alt={titulo} />
      <h2>{titulo}</h2>
      <p>{autor}</p>
      <p>{anio}</p>
      <Link to={`/contenido/${id}`}>Ver detalle</Link>
    </article>
  );
};

export default Card;
