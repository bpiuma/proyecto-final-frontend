import React, { Component } from "react";
import "../../styles/footer.scss";
import logo from "../../img/copaVino.png";

export const Footer = () => {
	return (
		<footer className="  text-white">
			<div className="continer">
				<nav className="row">
					<a href="#" className="col-6 text-reset  d-flex align-items-center">
						<img src={logo} className="img-logo mr-1" width="15" />
						Wine Sensens
					</a>
					<div className="col-6 ext-reset d-flex justify-content-end ">
						<a href="#" className="mr-2 text-white">
							<i className="fab fa-facebook-square" />
						</a>
						<a href="#" className="mr-2 text-white">
							<i className="fab fa-instagram-square" />
						</a>
						<a href="#" className="mr-2 text-white">
							<i className="fab fa-twitter-square" />
						</a>
					</div>
				</nav>
			</div>
		</footer>
	);
};
