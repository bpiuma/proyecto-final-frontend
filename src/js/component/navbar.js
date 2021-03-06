import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import copaVino from "../../img/logoNab.png";
import Swal from "sweetalert2";
//import { jsonToTableHtmlString } from "json-table-converter";

export const Navbar = () => {
	const { store, actions } = useContext(Context);
	const userName = sessionStorage.getItem("userName");

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
	/*const user = store.token ? actions.parseJWT(store.token).user : "User Not Logged in";
	const showMyTastingsProducts = async () => {
		if (user.id) {
			await actions.getTasting(user.id);
		} else {
			Message.fire({
				icon: "warning",
				title: "You must log in to add products to the favorites!"
			});
		}
	};*/
	return (
		<nav className="navbar navbar-light  ">
			<Link to="/">
				<span className="ml-3">
					<img src={copaVino} width="60" />
				</span>
			</Link>
			<div className="ml-auto">
				<div className="btn-group">
					{(store.userName != null && store.userName != undefined) || store.userName == "" ? (
						<div className="d-flex">
							<div className="btn-group dropleft" role="group">
								<button
									type="button"
									className="btn text-white dropdown-toggle dropdown-toggle-split border-0"
									data-toggle="dropdown"
									aria-haspopup="true"
									aria-expanded="false">
									<span className="sr-only">Toggle Dropleft</span>
								</button>
								<div className="dropdown-menu">
									<p className="title-item">User Profile</p>
									<div className="dropdown-divider" />
									<Link to="/upData">
										{" "}
										<p className="dropdown-item">
											<i className="fa fa-pencil-square-o" aria-hidden="true" /> Update Personal
											data
										</p>{" "}
									</Link>
									<Link to="/changePassword">
										{" "}
										<p className="dropdown-item">
											<i className="fa fa-key" aria-hidden="true" /> Change Password
										</p>{" "}
									</Link>
									<Link to="/">
										{" "}
										<p
											className="dropdown-item"
											onClick={() => {
												actions.logout(sessionStorage.getItem("token"));
												sessionStorage.removeItem("token");
												sessionStorage.removeItem("userName");
												sessionStorage.removeItem("cart");
												actions.setUser(null, null);
												actions.setFavorites(null);
												actions.setCart(null);
											}}>
											<i className="fa fa-sign-out" aria-hidden="true" /> Logout
										</p>{" "}
									</Link>
									<div className="dropdown-divider" />
									<Link to="/tasting">
										{" "}
										<p className="dropdown-item">
											<i className="fa fa-cart-arrow-down" aria-hidden="true" /> My Tastings
											Products
										</p>{" "}
									</Link>
								</div>
								<div className="d-flex align-items-center">
									<i className="fas fa-user text-white  " />
								</div>
							</div>
							<div
								className="d-flex align-items-center ml-2 mr-2"
								style={{ color: "white", fontSize: 20 + "px" }}>
								Welcome, {userName}
							</div>
						</div>
					) : (
						<Link to="/login">
							<button type="button" className="btn text-white">
								Login
							</button>
						</Link>
					)}
				</div>

				{!((store.userName != null && store.userName != undefined) || store.userName == "") ? (
					<i
						className="fas fa-shopping-cart text-white ml-3 mr-3"
						data-toggle="tooltip"
						onClick={() =>
							Message.fire({
								icon: "warning",
								title: "You must log in to see your cart"
							})
						}
					/>
				) : store.cart == null ||
				store.cart == [] ||
				store.cart.message == "The user has no products in cart" ? (
					<i
						className="fas fa-shopping-cart text-white ml-3 mr-3"
						data-toggle="tooltip"
						onClick={() =>
							Message.fire({
								icon: "warning",
								title: "You have not added products to the cart yet"
							})
						}>
						<span className="badge badge-pill badge-info">0</span>
					</i>
				) : (
					<Link to="/store">
						<i className="fas fa-shopping-cart text-white ml-3 mr-3">
							<span className="badge badge-pill badge-info">3</span>
							{/* {store.cart.userCartProduct.length} */}
						</i>
					</Link>
				)}

				{!(store.userName != null && store.userName != undefined) || store.userName == "" ? (
					<i
						className="fas fa-heart ml-3 mr-3 text-white"
						style={{ cursor: "pointer" }}
						data-toggle="tooltip"
						onClick={() =>
							Message.fire({
								icon: "warning",
								title: "You must log in to see your favourite wines"
							})
						}
					/>
				) : store.favorites == null ||
				store.favorites == [] ||
				store.favorites.message == "User does not have favorite products" ? (
					<i
						className="fas fa-heart ml-3 mr-3 text-white"
						data-toggle="tooltip"
						onClick={() =>
							Message.fire({
								icon: "warning",
								title: "You have not added favourites wines yet"
							})
						}>
						<span className="badge badge-pill badge-info">0</span>
					</i>
				) : (
					<Link to="/favourite">
						<i className="fas fa-heart ml-3 mr-3 text-white">
							<span className="badge badge-pill badge-info">{store.favorites.length}</span>
						</i>
					</Link>
				)}
			</div>
		</nav>
	);
};
