import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import botellaVino from "../../img/botellaVino.png";
import { Context } from "../store/appContext";
import "../../styles/demo.scss";
import { Navbar } from "../component/navbar.js";

import { FormContactUs } from "../component/formContactUs";

export const Contact = () => {
	return (
		<div className="contact">
			<div className="formSingcontainer">
				<div className="divImg">
					<img src={botellaVino} height="650" />
					<h1 className="text ml-2">Contact Us</h1>
				</div>
				<div>
					<FormContactUs />
				</div>
			</div>
		</div>
	);
};
