import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import botellaVino from "../../img/botellaVino.png";
import { Context } from "../store/appContext";
import { UserTasting } from "../component/userTasting.js";
import { Navbar } from "../component/navbar.js";

export const Tasting = () => {
	const { store, actions } = useContext(Context);
	return (
		<div className="gallery">
			<UserTasting />
		</div>
	);
};
