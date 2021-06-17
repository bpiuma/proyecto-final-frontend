import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/cartas_inicio.scss";
import calendar_2 from "../../img/calendar_2.png";
import zoom_1 from "../../img/zoom_2.png";
import zoom_2 from "../../img/zoom_1.png";
import zoom_3 from "../../img/zoom_3.png";
import { ExternalLink } from "react-external-link";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import "../../styles/productDetails.scss";
export const AllEvents = () => {
	const { store, actions } = useContext(Context);
	const replaceDate = date => {
		//const newDate = date.replace(/(\d{4})-(\d{2})-(\d{2})/, "$3/$2/$1");
		const date1 = new Date(date);
		const newDate = date1.getDate() + "/" + (date1.getMonth() + 1) + "/" + date1.getFullYear();
		return newDate;
	};

	const user = store.token ? actions.parseJWT(store.token).user : "User Not Logged in";
	const Message = Swal.mixin({
		toast: true,
		position: "top-end",
		showConfirmButton: false,
		timer: 3000,
		timerProgressBar: true,
		didOpen: toast => {
			toast.addEventListener("mouseenter", Swal.stopTimer);
			toast.addEventListener("mouseleave", Swal.resumeTimer);
		}
	});

	const addUserToEvent = async (user, eventid) => {
		if (user.id) {
			await actions.addUserToEvent(user.id, eventid);
			Message.fire({
				icon: store.messages.icon,
				title: store.messages.message
			});
		} else {
			Message.fire({
				icon: "warning",
				title: "You must log in to add products to the favorites!"
			});
		}
	};
	return (
		<>
			<div className="bienvenido d-flex align-items-center justify-content-center mt-3 mb-3">
				<img src={calendar_2} width="48" height="48" className="" />
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
													<div className="product-grid">
														<div className="product-image">
															<img
																src={
																	item.id === 1
																		? zoom_1
																		: item.id === 2
																			? zoom_2
																			: item.id === 3
																				? zoom_3
																				: zoom_1
																}
																className="card-img-top"
																alt="..."
															/>
															<ul className="product-links">
																<li>
																	<a
																		href="#"
																		data-tip="Add User to Event"
																		onClick={() => addUserToEvent(user, item.id)}>
																		<i
																			className="fa fa-calendar-plus-o"
																			aria-hidden="true"
																		/>
																	</a>
																</li>
																<li>
																	<a
																		href={item.link_zoom}
																		target="_blank"
																		rel="noopener noreferrer"
																		data-tip="Zoom: Meeting ID: 789 4990 1541 / Passcode: E4B61L">
																		<i
																			className="fa fa-video-camera"
																			aria-hidden="true"
																		/>
																	</a>

																	{/* <Link
                                                                    to={{ pathname: item.link_zoom }}
                                                                    target="_blank"
                                                                    data-tip="Zoom: Meeting ID: 789 4990 1541 / Passcode: E4B61L">
                                                                    <i
                                                                        className="fa fa-video-camera"
                                                                        aria-hidden="true"
                                                                    />
                                                                </Link> */}
																</li>
															</ul>
														</div>
													</div>
													<div className="card-body">
														<h5 className="card-title text-left">{item.title}</h5>
														<p className="card-text text-left">{item.description}</p>
													</div>
													<div className="card-footer">
														<span className="card-text text-center">
															<i className="fa fa-calendar" aria-hidden="true" /> Start
															Date: {replaceDate(item.start_date)}{" "}
															<i className="fa fa-calendar" aria-hidden="true" /> End
															Date: {replaceDate(item.end_date)}
														</span>
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
