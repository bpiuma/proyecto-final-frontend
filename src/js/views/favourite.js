import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/demo.scss";

import { Wishlist } from "../component/wishlist";

export const Favourite = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="store">
			<h1 className="titleStore">store</h1>
			<Wishlist />
		</div>
	);
};
