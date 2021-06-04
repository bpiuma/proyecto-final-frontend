import React from "react";
import { Footer } from "../component/footer";
// Falta importar NavBar!!
import { Cartas_inicio } from "../component/cartas_inicio";
import "../../styles/home.scss";
import { Link } from "react-router-dom";

export const Home = () => (
	<div>
		<div className="container d-flex">
			<div id="contenedor_boton1">
				<button id="boton_galeria">Galery</button>
			</div>
			<div id="space" />
			<div id="contenedor_boton2">
				<button id="boton_eventos">Events/Blog</button>
			</div>
		</div>

		<Cartas_inicio />
	</div>
);
