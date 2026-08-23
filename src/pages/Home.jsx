import { Link } from "react-router";

const Home = () => {
  return (
    <section className="max-w-6xl mx-auto px-6 py-10">
      <div className="text-center py-1">
        <h1 className="text-5xl font-bold text-amber-900 mb-4 text-shadow-lg/30">
          CULTURA CONECTADA
        </h1>
        <p className="text-lg text-stone-700 max-w-3xl mx-auto mb-4">
          Descubrí la cultura de Tucumán y del noroeste argentino a través de
          sus artistas, obras, historias y nuevas formas de expresión.
        </p>
        <p className="text-stone-600 max-w-3xl mx-auto mb-6">
          Cultura Conectada es un espacio pensado para acercarte a diferentes
          manifestaciones culturales de nuestra región, reuniendo en un mismo
          lugar propuestas tradicionales y contemporáneas.
        </p>
        <Link
          to="/explorar"
          className="inline-block bg-rose-900 text-white px-5 py-3 rounded-lg hover:bg-rose-800"
        >
          Explorar contenidos
        </Link>
      </div>
      <hr className="my-4 border-t border-gray-300" />
      <div className="py-8 flex flex-col md:flex-row gap-8 items-center">
        <div className="md:w-1/2">
          <h2 className="text-2xl font-bold text-amber-900 mb-4">
            Descubrí nuestra cultura
          </h2>
          <p className="text-stone-700 mb-4">
            El noroeste argentino posee una identidad cultural rica y diversa,
            construida a través de su música, su literatura, sus tradiciones y
            sus paisajes, pero también a través de nuevas producciones
            audiovisuales y digitales.
          </p>
          <p className="text-stone-700">
            En Cultura Conectada podés recorrer diferentes contenidos y conocer
            las personas, obras y expresiones que forman parte de esta
            identidad.
          </p>
        </div>
        <div className="md:w-1/2">
          <img
            src="/tuc1.webp"
            alt="Paisaje de Tucumán"
            className="w-full h-64 object-cover rounded-xl shadow-md"
          />
        </div>
      </div>
      <hr className="my-4 border-t border-gray-300" />
      <div className="py-8">
        <h2 className="text-2xl font-bold text-amber-900 mb-4">
          Explorá por categorías
        </h2>
        <p className="text-stone-700 mb-6">
          Encontrá contenidos organizados en diferentes áreas culturales:
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
          <Link
            to="/categoria/Música"
            className="bg-white rounded-xl shadow-md overflow-hidden hover:scale-105 transition-transform"
          >
            <img
              src="/musica.webp"
              alt="Música"
              className="w-full h-32 object-cover"
            />
            <p className="text-center font-semibold text-amber-900 py-3">
              Música
            </p>
          </Link>

          <Link
            to="/categoria/Cine"
            className="bg-white rounded-xl shadow-md overflow-hidden hover:scale-105 transition-transform"
          >
            <img
              src="/cine.webp"
              alt="Cine"
              className="w-full h-32 object-cover"
            />
            <p className="text-center font-semibold text-amber-900 py-3">
              Cine
            </p>
          </Link>

          <Link
            to="/categoria/Arte digital"
            className="bg-white rounded-xl shadow-md overflow-hidden hover:scale-105 transition-transform"
          >
            <img
              src="/arte.webp"
              alt="Arte digital"
              className="w-full h-32 object-cover"
            />
            <p className="text-center font-semibold text-amber-900 py-3">
              Arte digital
            </p>
          </Link>

          <Link
            to="/categoria/Videojuegos"
            className="bg-white rounded-xl shadow-md overflow-hidden hover:scale-105 transition-transform"
          >
            <img
              src="/videojuegos.webp"
              alt="Videojuegos"
              className="w-full h-32 object-cover"
            />
            <p className="text-center font-semibold text-amber-900 py-3">
              Videojuegos
            </p>
          </Link>

          <Link
            to="/categoria/Literatura"
            className="bg-white rounded-xl shadow-md overflow-hidden hover:scale-105 transition-transform"
          >
            <img
              src="/literatura.webp"
              alt="Literatura"
              className="w-full h-32 object-cover"
            />
            <p className="text-center font-semibold text-amber-900 py-3">
              Literatura
            </p>
          </Link>

          <Link
            to="/categoria/Cultura local o regional"
            className="bg-white rounded-xl shadow-md overflow-hidden hover:scale-105 transition-transform"
          >
            <img
              src="/cultura.webp"
              alt="Cultura local o regional"
              className="w-full h-32 object-cover"
            />
            <p className="text-center font-semibold text-amber-900 py-3">
              Cultura local
            </p>
          </Link>
        </div>
        <Link
          to="/categorias"
          className="inline-block bg-rose-900 text-white px-5 py-3 rounded-lg hover:bg-rose-800"
        >
          Ver todas las categorías
        </Link>
      </div>
      <hr className="my-4 border-t border-gray-300" />
      <div className="py-8">
        <h2 className="text-2xl font-bold text-amber-900 mb-4">
          Un recorrido por Tucumán y el NOA
        </h2>
        <p className="text-stone-700 mb-4">
          Desde expresiones que forman parte de nuestra historia hasta nuevas
          propuestas culturales, la plataforma reúne contenidos que permiten
          descubrir diferentes aspectos de Tucumán y del noroeste argentino.
        </p>
        <p className="text-stone-700 mb-6">
          Elegí una categoría, explorá los contenidos y conocé un poco más sobre
          la cultura de nuestra región.
        </p>
        <Link
          to="/explorar"
          className="inline-block bg-rose-900 text-white px-5 py-3 rounded-lg hover:bg-rose-800"
        >
          Comenzar a explorar
        </Link>
      </div>
      <aside className="mt-8 bg-amber-900 text-white rounded-xl overflow-hidden shadow-md flex flex-col md:flex-row">
        <div className="md:w-1/2">
          <img
            src="/tuc2.webp"
            alt="Paisaje de Tucumán"
            className="w-full h-64 md:h-full object-cover"
          />
        </div>

        <div className="md:w-1/2 p-6 flex flex-col justify-center">
          <h2 className="text-2xl font-bold mb-3">Visitá Tucumán</h2>

          <p className="mb-5">
            Descubrí sus paisajes, tradiciones, sabores y lugares históricos.
            Viví la cultura tucumana más allá de la pantalla.
          </p>

          <Link
            to="/visita-tucuman"
            className="inline-block bg-rose-900 text-white px-5 py-3 rounded-lg hover:bg-rose-800 text-center"
          >
            El Jardín de la República
          </Link>
        </div>
      </aside>
    </section>
  );
};

export default Home;
