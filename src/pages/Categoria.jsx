import { useParams } from "react-router";
import contenidos from "../data/contenidos";
import Card from "../components/Card";

const Categoria = () => {
  const { categoria } = useParams();

  const contenidosFiltrados = contenidos.filter(
    (contenido) => contenido.categoria === categoria,
  );

  return (
    <section>
      <h1>{categoria}</h1>

      <div>
        {contenidosFiltrados.map((contenido) => (
          <Card key={contenido.id} contenido={contenido} />
        ))}
      </div>
    </section>
  );
};

export default Categoria;
