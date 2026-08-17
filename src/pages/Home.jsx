import { Link } from "react-router";

const Home = () => {
  return (
    <section>
      <h1>Cultura Conectada</h1>

      <p>
        Descubrí la cultura de Tucumán y del noroeste argentino a través de sus
        artistas, obras, historias y nuevas formas de expresión.
      </p>

      <p>
        Cultura Conectada es un espacio pensado para acercarte a diferentes
        manifestaciones culturales de nuestra región, reuniendo en un mismo
        lugar propuestas tradicionales y contemporáneas.
      </p>

      <Link to="/explorar">Explorar contenidos</Link>

      <h2>Descubrí nuestra cultura</h2>

      <p>
        El noroeste argentino posee una identidad cultural rica y diversa,
        construida a través de su música, su literatura, sus tradiciones y sus
        paisajes, pero también a través de nuevas producciones audiovisuales y
        digitales.
      </p>

      <p>
        En Cultura Conectada podés recorrer diferentes contenidos y conocer las
        personas, obras y expresiones que forman parte de esta identidad.
      </p>

      <h2>Explorá por categorías</h2>

      <p>Encontrá contenidos organizados en diferentes áreas culturales:</p>

      <ul>
        <li>Música</li>
        <li>Cine y series</li>
        <li>Arte digital</li>
        <li>Videojuegos</li>
        <li>Literatura</li>
        <li>Cultura local o regional</li>
      </ul>
      <Link to="/categorias">Ver todas las categorías</Link>

      <h2>Un recorrido por Tucumán y el NOA</h2>

      <p>
        Desde expresiones que forman parte de nuestra historia hasta nuevas
        propuestas culturales, la plataforma reúne contenidos que permiten
        descubrir diferentes aspectos de Tucumán y del noroeste argentino.
      </p>

      <p>
        Elegí una categoría, explorá los contenidos y conocé un poco más sobre
        la cultura de nuestra región.
      </p>

      <Link to="/explorar">Comenzar a explorar</Link>
    </section>
  );
};

export default Home;
