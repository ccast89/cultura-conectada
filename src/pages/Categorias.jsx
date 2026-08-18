import { Link } from "react-router";

const Categorias = () => {
  const categorias = [
    {
      nombre: "Música",
      imagen: "/musica.webp",
    },
    {
      nombre: "Cine",
      imagen: "/cine.webp",
    },
    {
      nombre: "Arte digital",
      imagen: "/arte.webp",
    },
    {
      nombre: "Videojuegos",
      imagen: "/videojuegos.webp",
    },
    {
      nombre: "Literatura",
      imagen: "/literatura.webp",
    },
    {
      nombre: "Cultura local o regional",
      imagen: "/cultura.webp",
    },
  ];

  return (
    <section className="max-w-6xl mx-auto px-6 py-10">
      <h1 className="text-3xl font-bold text-amber-900 mb-8">Categorías</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categorias.map((categoria, index) => {
          const { nombre, imagen } = categoria;

          return (
            <article
              key={index}
              className="bg-white rounded-xl shadow-md overflow-hidden"
            >
              <img
                src={imagen}
                alt={nombre}
                className="w-full h-48 object-cover"
              />

              <div className="p-5">
                <h2 className="text-xl font-bold text-amber-900 mb-4">
                  {nombre}
                </h2>

                <Link
                  to={`/categoria/${nombre}`}
                  className="inline-block bg-rose-900 text-white px-4 py-2 rounded-lg hover:bg-rose-800"
                >
                  Ver categoría
                </Link>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Categorias;
