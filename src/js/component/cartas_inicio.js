import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../../styles/cartas_inicio.scss";

export const Cartas_inicio = () => {
	return (
		<>
			<div className="row">
				<div className="col-12" id="bienvenida_pag">
					<div>
						<div className="card_presentacion">
							<div data-aos="fade-up">
								<div className="card-body">Bienvenidos</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="row">
				<div className="col-12">
					<div className="cards d-flex">
						<div className="card-group d-flex">
							<div className="zoom d-flex">
								<button className="boton_link">
									<div className="card d-flex">
										<img
											src="https://www.cocinayvino.com/wp-content/uploads/2019/06/88871716_m-e1559764944562.jpg"
											className="card-img-top"
											alt="..."
										/>
										<div className="card-body">
											<h5 className="card-title">Tienda</h5>
											<p className="card-text">
												This card has supporting text below as a natural lead-in to additional
												content.
											</p>
										</div>
										<div className="card-footer">
											<small className="text-muted" />
										</div>
									</div>
								</button>
							</div>

							<div className="espacio_cards" />

							<div className="zoom d-flex">
								<button className="boton_link">
									<div className="card d-flex">
										<img
											src="https://winetastingbled.com/wp-content/uploads/shutterstock_791793577-900x601.jpg"
											className="card-img-top"
											alt="..."
										/>
										<div className="card-body">
											<h5 className="card-title">Cata virtual</h5>
											<p className="card-text">
												This card has supporting text below as a natural lead-in to additional
												content.
											</p>
										</div>
										<div className="card-footer">
											<small className="text-muted" />
										</div>
									</div>
								</button>
							</div>

							<div className="espacio_cards" />

							<div className="zoom d-flex">
								<button className="boton_link">
									<div className="card d-flex">
										<img
											src="https://blog.nellisgroup.com/files/2020/05/sh8-4645-369.jpg"
											className="card-img-top"
											alt="..."
										/>
										<div className="card-body">
											<h5 className="card-title">Acerca de Nosotros</h5>
											<p className="card-text">
												This card has supporting text below as a natural lead-in to additional
												content.
											</p>
										</div>
										<div className="card-footer">
											<small className="text-muted" />
										</div>
									</div>
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
