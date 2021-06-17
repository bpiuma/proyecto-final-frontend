import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/productDetails.scss";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import renderHTML from "react-render-html";
export const Pdetails = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	useEffect(() => {
		actions.loadProductDetails(params.productid);
	}, []);
	const styles = {
		fontsize: "24px"
	};
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
				'<li className="fas fa-star" />' +
				'<li className="far fa-star" />' +
				'<li className="far fa-star" />' +
				'<li className="far fa-star" />' +
				'<li className="far fa-star" />';
		}
		if (stars === 2) {
			html =
				'<li className="fas fa-star" />' +
				'<li className="fas fa-star" />' +
				'<li className="far fa-star" />' +
				'<li className="far fa-star" />' +
				'<li className="far fa-star" />';
		}
		if (stars === 3) {
			html =
				'<li className="fas fa-star" />' +
				'<li className="fas fa-star" />' +
				'<li className="fas fa-star" />' +
				'<li className="far fa-star" />' +
				'<li className="far fa-star" />';
		}
		if (stars === 4) {
			html =
				'<li className="fas fa-star" />' +
				'<li className="fas fa-star" />' +
				'<li className="fas fa-star" />' +
				'<li className="fas fa-star" />' +
				'<li className="far fa-star" />';
		}
		if (stars === 5) {
			html =
				'<li className="fas fa-star" />' +
				'<li className="fas fa-star" />' +
				'<li className="fas fa-star" />' +
				'<li className="fas fa-star" />' +
				'<li className="fas fa-star" />';
		}
		return html;
	};

	const Zoom = Swal.mixin({
		showConfirmButton: false
	});
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
	const user = store.token ? actions.parseJWT(store.token).user : "User Not Logged in";

	const addToFavorites = async (user, productid) => {
		if (user.id) {
			await actions.addToFavorites(user.id, productid);
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

	const addToTasting = async (user, productid) => {
		if (user.id) {
			await actions.addToTasting(user.id, productid);
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

	const addToCart = async (user, productid) => {
		if (user.id) {
			await actions.addToCart(user.id, productid);
			Message.fire({
				icon: store.messages.icon,
				title: store.messages.message
			});
		} else {
			Message.fire({
				icon: "warning",
				title: "You must log in to add products to the cart"
			});
		}
	};

	const zoomImage = (imageTitle, imageUrl) => {
		Zoom.fire({
			title: imageTitle,
			imageUrl: imageUrl,
			imageWidth: 444,
			imageHeight: 568,
			imageAlt: "Image of Product",
			animation: false
		});
	};
	return (
		<>
			<div className="container-fluid py-2">
				<h2 className="h2">Product Details</h2>
				<div className="row d-flex justify-content-center">
					<div className="col-md-3 col-sm-6">
						<div className="product-grid">
							<div className="product-image">
								<a href="#" className="image">
									<img className="pic-1" src={store.productDetails.imagebig} />
								</a>
								<span className="product-discount-label">
									{store.productDetails.discountTasting}% for product tasting!
								</span>
								<ul className="product-links">
									<li>
										<a
											href="#"
											data-tip="Add to Wishlist"
											onClick={() => addToFavorites(user, store.productDetails.id)}>
											<i className="fas fa-heart" />
										</a>
									</li>
									<li>
										<a
											href="#"
											data-tip="Add Product to Tasting(Max. 3)"
											onClick={() => addToTasting(user, store.productDetails.id)}>
											<i className="fa fa-cart-plus" aria-hidden="true" style={styles} />
										</a>
									</li>
									<li>
										<a
											href="#"
											data-tip="Zoom Image"
											className="zoomImage"
											onClick={() =>
												zoomImage(store.productDetails.title, store.productDetails.imagebig)
											}>
											<i className="fa fa-eye" />
										</a>
									</li>
								</ul>
							</div>
							<div className="product-content">
								<ul className="rating">
									<li className="fas fa-star" />
									<li className="fas fa-star" />
									<li className="fas fa-star" />
									<li className="fas fa-star" />
									<li className="fas fa-star" />
								</ul>
								<h3 className="title">
									Title: <small className="text-muted mb-1">{store.productDetails.title}</small>
								</h3>
								<div className="description">
									Description:{" "}
									<small className="text-muted mb-1">{store.productDetails.description}</small>
								</div>

								<div className="d-flex flex-row justify-content-between p-3 mid">
									<div className="d-flex flex-column">
										Variety
										<div className="d-flex flex-row">
											<img
												src="https://upload.wikimedia.org/wikipedia/commons/e/ed/Grapes_icon.svg"
												width="35px"
												height="25px"
											/>
											<div className="d-flex flex-column ml-1">
												<small className="text-muted mb-0">
													{store.productDetails.variety}
												</small>
											</div>
										</div>
									</div>
									<div className="d-flex flex-column">
										Winery
										<div className="d-flex flex-row">
											<img
												src="https://www.pinclipart.com/picdir/big/68-680488_gareoult-cotignac-hyres-wednesday-vineyard-icon-png.png"
												width="35px"
												height="25px"
											/>
											<div className="d-flex flex-column ml-1">
												<small className="text-muted mb-0">{store.productDetails.winery}</small>
											</div>
										</div>
									</div>
								</div>
								<div className="d-flex flex-row justify-content-between p-3 mid">
									<div className="d-flex flex-column">
										Province
										<div className="d-flex flex-row">
											<img
												src="https://images-na.ssl-images-amazon.com/images/I/514JSuo0YrL.png"
												width="35px"
												height="25px"
											/>
											<div className="d-flex flex-column ml-1">
												<small className="text-muted mb-0">
													{store.productDetails.province}
												</small>
											</div>
										</div>
									</div>
									<div className="d-flex flex-column">
										Country
										<div className="d-flex flex-row">
											<img
												src="https://image.flaticon.com/icons/png/128/2947/2947656.png"
												width="35px"
												height="25px"
											/>
											<div className="d-flex flex-column ml-1">
												<small className="text-muted mb-0">
													{store.productDetails.country}
												</small>
											</div>
										</div>
									</div>
								</div>
								<div className="d-flex align-items-center pt-3">
									<Link to="/gallery">
										<button type="button" className="btnBack btn  btn-sm d-flex align-items-center">
											<i className="fas fa-arrow-left mr-3" />
											Back
										</button>
									</Link>
									<div className="price m-auto">Price: USD {store.productDetails.price}</div>
								</div>
								<a
									className="add-to-cart"
									href="#"
									onClick={() => addToCart(user, store.productDetails.id)}>
									add to cart
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
