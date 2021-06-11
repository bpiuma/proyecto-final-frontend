import React, { Component } from "react";
import "../../styles/footer.scss";

export const Footer = () => {
	return (
		<footer className="footer fixed-bottom mt-auto text-center">
			<div className="page-footer text-center py-3">
				<div className="logo">
					<a href="https://www.instagram.com/wine/?hl=es" target="_blank" rel="noopener noreferrer">
						<i className="fab fa-instagram" />
					</a>
					<div className="espacio" />
					<a href="https://www.instagram.com/wine/?hl=es" target="_blank" rel="noopener noreferrer">
						<i className="fab fa-facebook" />
					</a>
					<div className="espacio" />
					<a href="https://www.instagram.com/wine/?hl=es" target="_blank" rel="noopener noreferrer">
						<i className="far fa-comments" />
					</a>
				</div>
			</div>
		</footer>
	);
};
