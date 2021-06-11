import React, { Component } from "react";
import { Link } from "react-router-dom";

export const GalleryEvents = () => {
	return (
		<>
			<div className="container d-flex">
				<div id="contenedor_boton1">
					<Link to="/gallery">
						<button id="boton_galeria">Gallery</button>
					</Link>
				</div>
				<div id="space" />
				<div id="contenedor_boton2">
					<button id="boton_eventos">Events/Blog</button>
				</div>
			</div>
		</>
	);
};
