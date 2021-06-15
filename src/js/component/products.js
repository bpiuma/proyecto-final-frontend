import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/productGallery.scss";
import Slider from "react-slick";
import renderHTML from "react-render-html";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { ExternalLink } from "react-external-link";
export const Products = () => {
	const { store, actions } = useContext(Context);

	const starts = points => {
		return points > 0 && points <= 20
			? 1
			: points > 20 && points <= 40
				? 2
				: points > 40 && points <= 60
					? 3
					: points > 60 && points <= 80
						? 4
						: points > 80 && points <= 100
							? 5
							: 0;
	};
	const startsPoints = stars => {
		let html;
		if (stars === 1) {
			html =
				'<span className="fas fa-star" aria-hidden="true" />' +
				'<span className="far fa-star" aria-hidden="true" />' +
				'<span className="far fa-star" aria-hidden="true" />' +
				'<span className="far fa-star" aria-hidden="true" />' +
				'<span className="far fa-star" aria-hidden="true" />';
		}
		if (stars === 2) {
			html =
				'<span className="fas fa-star" aria-hidden="true" />' +
				'<span className="fas fa-star" aria-hidden="true" />' +
				'<span className="far fa-star" aria-hidden="true" />' +
				'<span className="far fa-star" aria-hidden="true" />' +
				'<span className="far fa-star" aria-hidden="true" />';
		}
		if (stars === 3) {
			html =
				'<span className="fas fa-star" aria-hidden="true" />' +
				'<span className="fas fa-star" aria-hidden="true" />' +
				'<span className="fas fa-star" aria-hidden="true" />' +
				'<span className="far fa-star" aria-hidden="true" />' +
				'<span className="far fa-star" aria-hidden="true" />';
		}
		if (stars === 4) {
			html =
				'<span className="fas fa-star" aria-hidden="true" />' +
				'<span className="fas fa-star" aria-hidden="true" />' +
				'<span className="fas fa-star" aria-hidden="true" />' +
				'<span className="fas fa-star" aria-hidden="true" />' +
				'<span className="far fa-star" aria-hidden="true" />';
		}
		if (stars === 5) {
			html =
				'<span className="fas fa-star" aria-hidden="true" />' +
				'<span className="fas fa-star" aria-hidden="true" />' +
				'<span className="fas fa-star" aria-hidden="true" />' +
				'<span className="fas fa-star" aria-hidden="true" />' +
				'<span className="fas fa-star" aria-hidden="true" />';
		}
		return html;
	};
	const user = store.token ? actions.parseJWT(store.token).user : "User Not Logged in";
	const styles = {
		maxwidth: "18rem"
	};
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

	const addToCart = (user, productid) => {
		if (user.id) {
			const data = actions.addToCart(user.id, productid);
			Message.fire({
				icon: "success",
				title: data ? data : sessionStorage.getItem("messageCart")
			});
		} else {
			Message.fire({
				icon: "warning",
				title: "You must log in to add products to the cart"
			});
		}
	};

	const settings = {
		dots: false,
		arrows: true,
		slidesToShow: 3,
		infinite: false,
		/*className: "center",
		centerMode: true,
		infinite: true,
		centerPadding: "60px",
		slidesToShow: 3,
		speed: 500,*/
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3
				}
			},
			{
				breakpoint: 800,
				settings: {
					slidesToShow: 2
				}
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 1
				}
			}
		]
	};
	return (
		<>
			<div className="container-fluid py-2">
				<header>
					<div>
						<h1>Products</h1>
						<p>👇 Scroll left or right to see all offer wines.</p>
					</div>
				</header>
				<div className="card-slider">
					<Slider {...settings}>
						{store.products
							? store.products.map((item, index) => (
									<div key={`${index}`} className="container-fluid d-flex justify-content-center">
										<div className="row mt-5">
											<div className="col-sm-4 py-2">
												<div className="card h-100">
													<img src={item.image} className="card-img-top" />
													<div className="badge">
														<button
															type="button"
															className="btn btn-danger btn-sm"
															onClick={""}>
															<i className="fa fa-heart-o heart" aria-hidden="true" />
														</button>
													</div>
													<div className="preview">
														<Link
															to={"/pdetails/" + item.id}
															className="btn btn-danger btn-sm">
															<i className="fa fa-search" aria-hidden="true" />
														</Link>
													</div>
													<div className="card-body pt-0 px-0">
														<div className="d-flex flex-row justify-content-between mb-0 px-3">
															{" "}
															<small className="text-muted mt-1">Price:</small>
															<h6>USD {item.price}</h6>
														</div>
														<hr className="mt-2 mx-3" />
														<div className="d-flex flex-row justify-content-between px-3 pb-4">
															<div className="d-flex flex-column">
																<span className="text-muted">{item.title}</span>
															</div>
														</div>
														<div className="d-flex flex-row justify-content-between p-3 mid">
															<div className="d-flex flex-column">
																<small className="text-muted mb-1">Variety</small>
																<div className="d-flex flex-row">
																	<img
																		src="https://upload.wikimedia.org/wikipedia/commons/e/ed/Grapes_icon.svg"
																		width="35px"
																		height="25px"
																	/>
																	<div className="d-flex flex-column ml-1">
																		<h6 className="ml-1">{item.variety}</h6>
																	</div>
																</div>
															</div>
															<div className="d-flex flex-column">
																<small className="text-muted mb-2">Winery</small>
																<div className="d-flex flex-row">
																	<img
																		src="https://www.pinclipart.com/picdir/big/68-680488_gareoult-cotignac-hyres-wednesday-vineyard-icon-png.png"
																		width="35px"
																		height="25px"
																	/>
																	<div className="d-flex flex-column ml-1">
																		<h6 className="ml-1">{item.winery}</h6>
																	</div>
																</div>
															</div>
														</div>
														<small className="text-muted key pl-3">
															Rating: {starts(item.points)} out of 5 stars
															<div className="rating">
																{renderHTML(startsPoints(starts(item.points)))}

																<br />
																<ExternalLink
																	href={
																		"https://twitter.com/" +
																		item.taster_twitter_handle
																	}
																	className="reviews-link">
																	Reviewer: {item.taster_name} <br />
																	<i
																		className="fa fa-twitter"
																		aria-hidden="true"
																	/>{" "}
																	{item.taster_twitter_handle}
																</ExternalLink>
															</div>
														</small>
														<div className="mx-3 mt-3 mb-2">
															<button
																type="button"
																className="btn btn-danger btn-block"
																onClick={() => addToCart(user, item.id)}>
																<small>ADD TO CART</small>
															</button>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
							  ))
							: "Loading..."}
					</Slider>
				</div>
			</div>
		</>
	);
};
