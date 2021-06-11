import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Products = () => {
	const { store, actions } = useContext(Context);
	const styles = {
		maxwidth: "18rem"
	};
	return (
		<>
			<div className="container-fluid py-2">
				<h2 className="text-danger">
					<strong>Products</strong>
				</h2>
				<div className="d-flex flex-row flex-nowrap overflow-auto" />
			</div>
		</>
	);
};
