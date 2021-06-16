import React from "react";
import { Footer } from "../component/footer";
// Falta importar NavBar!!
import { Cartas_inicio } from "../component/cartas_inicio";
import "../../styles/home.scss";
import { Link } from "react-router-dom";
import logo from "../../img/logowas.png";
export const Home = () => {
	return (
		<>
			<Cartas_inicio />
		</>
	);
};
