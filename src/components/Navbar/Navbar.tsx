import React, { useEffect, useState } from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
import MailIcon from "../icons/MailIcon";
import MenuIcon from "../icons/MenuIcon";

export type NavbarProps = {};

const Navbar: React.FC<NavbarProps> = () => {
  useEffect(() => {
    const w = window.innerWidth;
    if (w <= 730) {
      setMenuActive(false);
    }
  }, []);

  const [menuActive, setMenuActive] = useState(true);

  const handleMenu = () => {
    const w = window.innerWidth;

    if (w <= 730) {
      setMenuActive((prevState) => {
        return !prevState;
      });
    }
  };

  return (
    <header>
      <nav className="Navbar-menu-mobile">
        <MenuIcon onClick={handleMenu} />
      </nav>

      <nav className="Navbar" style={{ display: menuActive ? "flex" : "none" }}>
        <NavLink
          onClick={handleMenu}
          className={({ isActive }) => (isActive ? "active" : "option-test")}
          to="/"
        >
          Inicio
        </NavLink>
        <NavLink onClick={handleMenu} className="option-test" to="/aboutme">
          Sobre mi
        </NavLink>
        <NavLink onClick={handleMenu} className="option-test" to="/projects">
          Proyectos
        </NavLink>
        <a href="mailto:ivanexdev@gmail.com" className="navbar-mail">
          Contacto <MailIcon />
        </a>
      </nav>
    </header>
  );
};

export default Navbar;
