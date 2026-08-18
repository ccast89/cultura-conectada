import { Link, NavLink } from "react-router";

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
        <nav className="bg-amber-900 flex justify-around items-center py-3 text-lg">
          <Link to="/">
            <img
              src="/logo.webp"
              alt="Logo de Cultura Conectada"
              className="w-25 h-25 rounded-full object-cover"
            />
          </Link>

          <div>
            <ul className="flex gap-6">
              {listMenu.map((item, index) => (
                <li key={index}>
                  <NavLink
                    to={item.path}
                    className={({ isActive }) =>
                      isActive ? "text-amber-200 underline" : "text-stone-100"
                    }
                  >
                    {item.text}
                  </NavLink>
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
