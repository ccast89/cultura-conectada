import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="bg-amber-900 text-stone-100 text-center py-6">
      <Link to="/" className="inline-block mb-3">
        <img
          src="/logo.webp"
          alt="Logo de Cultura Conectada"
          className="w-20 h-20 rounded-full object-cover mx-auto"
        />
      </Link>

      <p className="font-semibold mb-2">Cultura Conectada - 2026</p>

      <p className="text-sm">
        Proyecto sobre cultura de Tucumán y del noroeste argentino.
      </p>
    </footer>
  );
};

export default Footer;
