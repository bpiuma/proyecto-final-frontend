import React from "react";
import { Link } from "react-router-dom";
import copaVino from "../../img/copaVinoo.png";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light  ">
			<Link to="/">
				<span className="ml-3">
					<img src={copaVino} width="60" />
				</span>
			</Link>
			<div className="ml-auto">
				<div className="btn-group">
					<div className="btn-group dropleft" role="group">
						<button
							type="button"
							className="btn btn-secondary dropdown-toggle dropdown-toggle-split border-0"
							data-toggle="dropdown"
							aria-haspopup="true"
							aria-expanded="false">
							<span className="sr-only">Toggle Dropleft</span>
						</button>
						<div className="dropdown-menu">
							<Link to="/upData">
								{" "}
								<a className="dropdown-item">Update Personal data</a>{" "}
							</Link>
							<a className="dropdown-item">Change Password</a>
							<a className="dropdown-item">Sign off</a>{" "}
						</div>
					</div>
					<Link to="/login">
						<button type="button" className="btn">
							<i className="fas fa-user text-white  " /> Mi cuenta
						</button>
					</Link>
				</div>
				<Link to="/store">
					<i className="fas fa-shopping-cart text-white ml-3 mr-3" />
				</Link>
				<Link to="/favourite">
					<i className="far herart fa-heart ml-3 mr-3" />
				</Link>
			</div>
		</nav>
	);
};
