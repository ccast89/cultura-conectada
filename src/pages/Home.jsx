import { Link } from "react-router";

const Home = () => {
  return (
    <section className="max-w-6xl mx-auto px-6 py-10">
      <div className="text-center py-1">
        <h1 className="text-4xl font-bold text-amber-900 mb-4">
          Cultura Conectada
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
      <div className="py-8">
        <h2 className="text-2xl font-bold text-amber-900 mb-4">
          Descubrí nuestra cultura
        </h2>
        <p className="text-stone-700 mb-4">
          El noroeste argentino posee una identidad cultural rica y diversa,
          construida a través de su música, su literatura, sus tradiciones y sus
          paisajes, pero también a través de nuevas producciones audiovisuales y
          digitales.
        </p>
        <p className="text-stone-700">
          En Cultura Conectada podés recorrer diferentes contenidos y conocer
          las personas, obras y expresiones que forman parte de esta identidad.
        </p>
      </div>
      <hr className="my-4 border-t border-gray-300" />
      <div className="py-8">
        <h2 className="text-2xl font-bold text-amber-900 mb-4">
          Explorá por categorías
        </h2>
        <p className="text-stone-700 mb-6">
          Encontrá contenidos organizados en diferentes áreas culturales:
        </p>
        <ul className="flex flex-wrap gap-3 mb-6">
          <li className="bg-amber-900 text-white px-4 py-2 rounded-full">
            Música
          </li>
          <li className="bg-amber-900 text-white px-4 py-2 rounded-full">
            Cine y series
          </li>
          <li className="bg-amber-900 text-white px-4 py-2 rounded-full">
            Arte digital
          </li>
          <li className="bg-amber-900 text-white px-4 py-2 rounded-full">
            Videojuegos
          </li>
          <li className="bg-amber-900 text-white px-4 py-2 rounded-full">
            Literatura
          </li>
          <li className="bg-amber-900 text-white px-4 py-2 rounded-full">
            Cultura local o regional
          </li>
        </ul>
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
    </section>
  );
};

export default Home;
