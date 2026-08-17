import contenidos from "../data/contenidos";

import Card from "../components/Card";

const Explorar = () => {
  return (
    <section>
      <h1>Explorar</h1>

      <div>
        {contenidos.map((contenido) => (
          <Card key={contenido.id} contenido={contenido} />
        ))}
      </div>
    </section>
  );
};

export default Explorar;
