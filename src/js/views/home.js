import React from "react";
import { Footer } from "../component/footer";
// Falta importar NavBar!!
import { Cartas_inicio } from "../component/cartas_inicio";
import { GalleryEvents } from "../component/galleryEvents";
import "../../styles/home.scss";
import { Link } from "react-router-dom";

export const Home = () => {
	return (
		<>
			<GalleryEvents />
			<Cartas_inicio />
		</>
	);
};
