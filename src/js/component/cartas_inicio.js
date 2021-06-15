import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../../styles/cartas_inicio.scss";
import logo from "../../img/logowas.png";

export const Cartas_inicio = () => {
	return (
		<>
			<div className="bienvenido d-flex align-items-center justify-content-center mt-3 mb-3">
				<img src={logo} width="30" className="" />
				<h1>Wine & Senses</h1>
			</div>
			<div className="row mt-3">
				<div className="col-md-12">
					<div className="cards d-flex">
						<div className="card-group d-flex">
							<div className="zoom d-flex">
								<Link to="/gallery">
									<div className="card d-flex">
										<img
											src="https://www.cocinayvino.com/wp-content/uploads/2019/06/88871716_m-e1559764944562.jpg"
											className="card-img-top"
											alt="..."
										/>
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
								<Link to="/">
									<div className="card d-flex">
										<img
											src="https://winetastingbled.com/wp-content/uploads/shutterstock_791793577-900x601.jpg"
											className="card-img-top"
											alt="..."
										/>
										<div className="card-body">
											<h5 className="card-title text-center">Tasting</h5>
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
										<img
											src="https://blog.nellisgroup.com/files/2020/05/sh8-4645-369.jpg"
											className="card-img-top"
											alt="..."
										/>
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
