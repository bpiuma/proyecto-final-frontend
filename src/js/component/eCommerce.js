import React, { useContext, useState, useEffect } from "react";
import { Link, Redirect } from "react-router-dom";
import { Context } from "../store/appContext";
import provisorio from "../../img/provisorio.jpg";
import copaVino from "../../img/copaVino.png";
import { OrderRow } from "../component/orderRow";
import Swal from "sweetalert2";

export const ECommerce = () => {
	const { store, actions } = useContext(Context);

	let userId = actions.parseJWT(store.token).user.id;

	const emptyCart = async () => {
		var myHeaders = new Headers();
		myHeaders.append("Authorization", store.token);
		var requestOptions = {
			method: "DELETE",
			headers: myHeaders,
			redirect: "follow"
		};
		fetch(process.env.BACKEND_URL + "/cart/user/" + userId, requestOptions)
			.then(response => response.json())
			.then(result => {
				console.log(result);
				actions.setCart(null);
				sessionStorage.removeItem("cart");
			})
			.catch(error => console.log("error", error));
	};

	return (
		<div className="eCommerce container mt-5">
			<div className="row">
				<div className="titleBuy col-12">
					<h1 className="ml-1 text-white text-center m-auto">Order details</h1>
				</div>
			</div>

			<div className="row">
				<div className="tarjetaCompra col-9">
					{store.cart.userCartProduct.map((item, i) => {
						return (
							<OrderRow
								key={i}
								image={item.product.image}
								name={item.product.title}
								quantity={item.cant}
								id={item.product.id}
								amount={item.amount}
								price={item.product.price}
							/>
						);
					})}
				</div>

				<div className="purchaseSummary col-3">
					<div className="row">
						<h5 className="col text-right">Total:</h5>
						<h5 className="col cost">{"$ " + store.totalAmount}</h5>
					</div>
					<div className="row d-flex justify-content-center">
						<Link to="/gallery">
							<button
								type="button"
								className="text-white btn  btn-sm d-flex align-items-center mt-3 mr-3">
								<i className="fas fa-arrow-left mr-3" />
								Back
							</button>
						</Link>
						<button
							type="button"
							className="btn bg-white mt-3"
							onClick={() =>
								Swal.fire({
									title: "Thank you!",
									text: "Your purchase is being processed",
									icon: "success",
									showCancelButton: false,
									confirmButtonText: "OK"
								}).then(result => {
									if (result.isConfirmed) {
										window.location = "/";
										emptyCart();
										actions.setCart([]);
									}
								})
							}>
							<i className="fas fa-shopping-cart mr-2" />
							Finish Buy
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};
