import { Link } from "react-router";
const Footer = () => {
  return (
    <footer>
      <Link to="/">
        <img src="/logo.webp" alt="Logo de Cultura Conectada" />
      </Link>
      <p>Cultura Conectada - 2026</p>

      <p>Proyecto sobre cultura de Tucumán y del noroeste argentino.</p>
    </footer>
  );
};

export default Footer;
