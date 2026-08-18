import contenidos from "../data/contenidos";

import Card from "../components/Card";

const Explorar = () => {
  return (
    <section className="max-w-6xl mx-auto px-6 py-10">
      <h1 className="text-3xl font-bold text-amber-900 mb-8">Explorar</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {contenidos.map((contenido) => (
          <Card key={contenido.id} contenido={contenido} />
        ))}
      </div>
    </section>
  );
};

export default Explorar;
