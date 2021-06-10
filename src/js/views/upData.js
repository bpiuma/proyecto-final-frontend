import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import botellaVino from "../../img/botellaVino.png";
import { Context } from "../store/appContext";
import "../../styles/demo.scss";

import { FormUpData } from "../component/formUpData";

export const UpData = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="signup">
			<div className="formSingcontainer">
				<div className="divImg">
					<img src={botellaVino} height="650" />
					<h1 className="text ml-2">Up Data</h1>
				</div>
				<div>
					<FormUpData />
				</div>
			</div>
		</div>
	);
};
