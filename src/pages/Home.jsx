import { Link } from "react-router";

const Home = () => {
  return (
    <section>
      <h1>Cultura Conectada</h1>

      <p>
        Una plataforma para descubrir expresiones culturales de Tucumán y del
        noroeste argentino.
      </p>

      <h2>Bienvenidos</h2>

      <p>
        Explorá contenidos relacionados con música, cine, arte digital,
        videojuegos, literatura y cultura local.
      </p>

      <h2>Categorías destacadas</h2>

      <ul>
        <li>Música</li>
        <li>Cine y series</li>
        <li>Arte digital</li>
        <li>Videojuegos</li>
        <li>Literatura</li>
        <li>Cultura local o regional</li>
      </ul>

      <Link to="/explorar">Explorar contenidos</Link>
    </section>
  );
};

export default Home;
