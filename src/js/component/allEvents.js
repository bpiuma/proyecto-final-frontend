import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/cartas_inicio.scss";
import calendar_4 from "../../img/calendar_4.png";
import zoom_1 from "../../img/zoom_1.png";
import zoom_2 from "../../img/zoom_2.png";
import zoom_3 from "../../img/zoom_3.png";
import { ExternalLink } from "react-external-link";
export const AllEvents = () => {
	const { store, actions } = useContext(Context);

	return (
		<>
			<div className="bienvenido d-flex align-items-center justify-content-center mt-3 mb-3">
				<img src={calendar_4} width="48" height="48" className="" />
				<h1>Tasting Events</h1>
			</div>
			<div className="row mt-3">
				<div className="col-md-12">
					<div className="cards d-flex">
						{store.events
							? store.events.map((item, index) => (
									<div key={`${index}`} className="card-group d-flex">
										<div className="zoom d-flex">
											<Link to="#">
												<div className="card d-flex">
													<img src={zoom_1} className="card-img-top" alt="..." />
													<div className="card-body">
														<h5 className="card-title text-center">{item.title}</h5>
														<p className="card-text text-center">{item.description}</p>
													</div>
													<div className="card-footer">
														<small className="text-muted">
															<i className="fa fa-calendar" aria-hidden="true" />
														</small>
														<small className="text-muted">
															<i className="fa fa-calendar" aria-hidden="true" />
															{item.end_date}
														</small>
													</div>
												</div>
											</Link>
										</div>
										<div className="espacio_cards" />
									</div>
							  ))
							: "Loading..."}
					</div>
				</div>
			</div>
		</>
	);
};
