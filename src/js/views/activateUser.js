import React from "react";
import { useParams } from "react-router-dom";
import botellaVino from "../../img/botellaVino.png";
import "../../styles/demo.scss";
import { FormActivateUser } from "../component/formActivateUser";

export const ActivateUser = () => {
	return (
		<div className="newPass">
			<div className="formcontainer">
				<div className="red">
					<img src={botellaVino} height="450" />
					<h1 className="text">User Registration</h1>
				</div>
				<div>
					<FormActivateUser />
				</div>
			</div>
		</div>
	);
};
