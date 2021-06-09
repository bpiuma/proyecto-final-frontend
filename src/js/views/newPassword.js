import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import botellaVino from "../../img/botellaVino.png";
import { Context } from "../store/appContext";
import "../../styles/demo.scss";
import { Navbar } from "../component/navbar.js";
import { FormNewPassword } from "../component/formNewPassword";

export const NewPassword = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="newPass">
			<div className="formcontainer">
				<div className="red">
					<img src={botellaVino} height="450" />
					<h1 className="text">Password Recovery</h1>
				</div>
				<div>
					<FormNewPassword />
				</div>
			</div>
		</div>
	);
};
