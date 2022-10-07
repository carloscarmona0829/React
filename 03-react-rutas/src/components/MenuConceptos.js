import { Link, NavLink } from "react-router-dom";

const MenuConceptos = () => {
  return (
    <nav>
      <ol>
        <li>
          <span>
            Enlaces HTML (No Recomendado porque renderiza toda la app):
          </span>
          <a href="/">Home</a>
          <a href="/acerca">Acerca</a>
          <a href="/contacto">Contácto</a>
        </li>

        <li>
          <span>Componente Link:</span>
          <Link to="/">Home</Link>
          <Link to="/acerca">Acerca</Link>
          <Link to="/contacto">Contacto</Link>
          <Link to="/error404">Error404</Link>
        </li>
        <li>
          <span>Componente NavLink:</span>
          <NavLink activeclassname="active" to="/">
            Home
          </NavLink>
          <NavLink activeclassname="active" to="/acerca">
            Acerca
          </NavLink>
          <NavLink activeclassname="active" to="/contacto">
            Contacto
          </NavLink>
        </li>
      </ol>
    </nav>
  );
};

export default MenuConceptos;