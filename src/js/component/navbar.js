import React from "react";
import { Link } from "react-router-dom";
import copaVino from "../../img/copaVino.png";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light  ">
			<Link to="/">
				<span className="ml-3">
					<img src={copaVino} width="20" />
				</span>
			</Link>
			<div className="ml-auto">
				<Link to="/login">
					<i className="fas fa-user text-white mr-3 " />
				</Link>
			</div>
			<Link to="/">
				<i className="fas fa-shopping-cart text-white mr-3" />
			</Link>
		</nav>
	);
};
