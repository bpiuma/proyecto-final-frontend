import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import botellaVino from "../../img/botellaVino.png";
import { Context } from "../store/appContext";
import { Products } from "../component/products.js";
import { Navbar } from "../component/navbar.js";

export const Gallery = () => {
	const { store, actions } = useContext(Context);
	return (
		<>
			<Products />
		</>
	);
};
