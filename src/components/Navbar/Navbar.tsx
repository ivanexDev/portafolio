import React from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
import MailIcon from "../icons/MailIcon";

export type NavbarProps = {};

const Navbar: React.FC<NavbarProps> = () => {
	return (
		<header>
			<nav className="Navbar">
				<NavLink
					className={({ isActive }) => (isActive ? "active" : "option-test")}
					to="/">
					Inicio
				</NavLink>
				<NavLink className="option-test" to="/aboutme">
					Sobre mi
				</NavLink>
				<NavLink className="option-test" to="/projects">
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
