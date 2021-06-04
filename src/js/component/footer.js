import React, { Component } from "react";
import "../../styles/footer.scss";

export const Footer = () => {
	return (
		<div className="row">
			<div className="col-12">
				<footer className="page-footer font-small">
					<div className="footer-copyright text-center py-3">
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
			</div>
		</div>
	);
};
