import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import botellaVino from "../../img/botellaVino.png";
import { Context } from "../store/appContext";
import "../../styles/demo.scss";
import { Navbar } from "../component/navbar.js";
import { FormForgetPassword } from "../component/formForgetPassword";

export const ForgetPassword = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="forget">
			<div className="formcontainer">
				<div className="red">
					<img src={botellaVino} height="450" />
					<h1 className="text">Forgot Password</h1>
				</div>
				<div>
					<FormForgetPassword />
				</div>
			</div>
		</div>
	);
};
