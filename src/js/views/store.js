import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { ECommerce } from "../component/eCommerce";
export const Store = () => {
	const { store, actions } = useContext(Context);
	return (
		<div className="container-fluid py-2">
			<ECommerce />
		</div>
	);
};
