import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import copaVino from "../../img/logoNab.png";
import Swal from "sweetalert2";

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
									<Link to="/upData">
										{" "}
										<p className="dropdown-item">Update Personal data</p>{" "}
									</Link>
									<Link to="/changePassword">
										{" "}
										<p className="dropdown-item">Change Password</p>{" "}
									</Link>
									<Link to="/">
										{" "}
										<p
											className="dropdown-item"
											onClick={() => {
												actions.logout(sessionStorage.getItem("token"));
												sessionStorage.removeItem("token");
												sessionStorage.removeItem("userName");
												actions.setUser(null, null);
												actions.setFavorites(null);
											}}>
											Logout
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
				<Link to="/store">
					<i className="fas fa-shopping-cart text-white ml-3 mr-3" />
				</Link>
				{(store.userName != null && store.userName != undefined) || store.userName == "" ? (
					<Link to="/favourite">
						<i className="far herart fa-heart ml-3 mr-3 text-white" />
					</Link>
				) : (
					<i
						className="fas fa-heart text-white ml-3 mr-3"
						style={{ cursor: "pointer" }}
						data-toggle="tooltip"
						onClick={() =>
							Message.fire({
								icon: "warning",
								title: "You must log in to see your favourite wines"
							})
						}
					/>
				)}
			</div>
		</nav>
	);
};
