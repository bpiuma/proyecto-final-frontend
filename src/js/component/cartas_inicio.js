import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../../styles/cartas_inicio.scss";
import logo from "../../img/logowas.png";
import home_1 from "../../img/home_1.jpg";
import home_2 from "../../img/home_2.jpg";
import home_3 from "../../img/home_3.jpg";
export const Cartas_inicio = () => {
	return (
		<>
			<div className="bienvenido d-flex align-items-center justify-content-center mt-3 mb-3">
				<img src={logo} width="30" className="" />
				<h1>
					<span>Wine</span> & <span>Senses</span>
				</h1>
			</div>
			<div className="row mt-3">
				<div className="col-md-12">
					<div className="cards d-flex">
						<div className="card-group d-flex">
							<div className="zoom d-flex">
								<Link to="/gallery">
									<div className="card d-flex">
										<img src={home_1} className="card-img-top" alt="..." />
										<div className="card-body">
											<h5 className="card-title text-center">Products</h5>
											<p className="card-text text-center">We can help you buy best wines.</p>
										</div>
										<div className="card-footer">
											<small className="text-muted" />
										</div>
									</div>
								</Link>
							</div>

							<div className="espacio_cards" />

							<div className="zoom d-flex">
								<Link to="/events">
									<div className="card d-flex">
										<img src={home_2} className="card-img-top" alt="..." />
										<div className="card-body">
											<h5 className="card-title text-center">Tasting Events</h5>
											<p className="card-text text-center">
												Instance where you can taste the most outstanding wines with our advice.
											</p>
										</div>
										<div className="card-footer">
											<small className="text-muted" />
										</div>
									</div>
								</Link>
							</div>

							<div className="espacio_cards" />

							<div className="zoom d-flex">
								<Link to="/contact">
									<div className="card d-flex">
										<img src={home_3} className="card-img-top" alt="..." />
										<div className="card-body">
											<h5 className="card-title text-center">Contact us</h5>
											<p className="card-text text-center">
												Find out how we can help you sell your product.
											</p>
										</div>
										<div className="card-footer">
											<small className="text-muted" />
										</div>
									</div>
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
