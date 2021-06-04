import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import botellaVino from "../../img/botellaVino.png";
import { Context } from "../store/appContext";
import "../../styles/demo.scss";
import { FormLogin } from "../component/formLogin.js";
import { Navbar } from "../component/navbar.js";

export const Login = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="login">
			<Navbar />
			<div className="formcontainer">
				<div className="red">
					<img src={botellaVino} height="450" />
					<h1 className="text">Login</h1>
				</div>
				<div>
					<FormLogin />
				</div>
			</div>
		</div>
	);
};
