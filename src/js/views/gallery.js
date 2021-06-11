import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import botellaVino from "../../img/botellaVino.png";
import { Context } from "../store/appContext";
import { Products } from "../component/products.js";
import { Navbar } from "../component/navbar.js";

export const Gallery = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="scrolling-wrapper row flex-row flex-nowrap pb-4 pt-2 overflow-auto">
			<Products />
		</div>
	);
};
