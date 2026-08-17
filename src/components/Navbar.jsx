import { Link, NavLink } from "react-router";
import logo from "../assets/logo.webp";

const Navbar = () => {
  const listMenu = [
    {
      text: "Inicio",
      path: "/",
    },
    {
      text: "Explorar",
      path: "/explorar",
    },
    {
      text: "Categorías",
      path: "/categorias",
    },
    {
      text: "Sobre el proyecto",
      path: "/sobre",
    },
  ];
  return (
    <div>
      <header>
        <nav>
          <Link to="/">
            <img src={logo} alt="Logo de Cultura Conectada" />
          </Link>

          <div>
            <ul>
              {listMenu.map((item, index) => (
                <li key={index}>
                  <NavLink to={item.path}>{item.text}</NavLink>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
