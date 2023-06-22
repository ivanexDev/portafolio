import React from "react";
import "./Navbar.css";

export type NavbarProps = {};

const Navbar: React.FC<NavbarProps> = () => {
	return (
		<nav className="Navbar">
			<a className="navbar-options" href="">
				Home
			</a>
			<a className="navbar-options" href="">
				About me{" "}
			</a>
			<a className="navbar-options" href="">
				Projects
			</a>
		</nav>
	);
};

export default Navbar;
