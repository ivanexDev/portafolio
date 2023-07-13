import React from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";

export type NavbarProps = {};

const Navbar: React.FC<NavbarProps> = () => {
	return (
		<header>
			<nav className="Navbar">
				<NavLink className="navbar-options rainbow-text" to="/">
					Inicio
				</NavLink>
				<NavLink className="navbar-options" to="/aboutme">
					Sobre mi
				</NavLink>
				<NavLink className="navbar-options" to="/projects">
					Proyectos
				</NavLink>
			</nav>
		</header>
	);
};

export default Navbar;
