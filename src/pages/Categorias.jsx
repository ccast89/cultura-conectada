import { Link } from "react-router";

const Categorias = () => {
  const categorias = [
    "Música",
    "Cine y/o series",
    "Arte digital",
    "Videojuegos",
    "Literatura",
    "Cultura local o regional",
  ];

  return (
    <section>
      <h1>Categorías</h1>

      <div>
        {categorias.map((categoria, index) => (
          <article key={index}>
            <h2>{categoria}</h2>

            <Link to={`/categoria/${categoria}`}>Ver categoría</Link>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Categorias;
