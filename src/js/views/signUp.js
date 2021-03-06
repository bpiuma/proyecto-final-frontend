import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import botellaVino from "../../img/botellaVino.png";
import { Context } from "../store/appContext";
import "../../styles/demo.scss";
import { Navbar } from "../component/navbar.js";

import { FormSignUp } from "../component/formSignUp";

export const SignUp = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="signup">
			<div className="formSingcontainer">
				<div className="divImg">
					<img src={botellaVino} height="650" />
					<h1 className="text ml-2">Sign Up</h1>
				</div>
				<div>
					<FormSignUp />
				</div>
			</div>
		</div>
	);
};
