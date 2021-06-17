import React from "react";
import { Footer } from "../component/footer";
// Falta importar NavBar!!
import { AllEvents } from "../component/allEvents";
import "../../styles/home.scss";
import { Link } from "react-router-dom";
import logo from "../../img/logowas.png";
export const Events = () => {
	return (
		<>
			<AllEvents />
		</>
	);
};
