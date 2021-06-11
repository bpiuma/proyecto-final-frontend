import React from "react";
import { useParams } from "react-router-dom";
import botellaVino from "../../img/botellaVino.png";
import "../../styles/demo.scss";
import { FormNewPassword } from "../component/formNewPassword";

export const NewPassword = () => {
	return (
		<div className="newPass">
			<div className="formcontainer">
				<div className="red">
					<img src={botellaVino} height="450" />
					<h1 className="text">Password Recovery</h1>
				</div>
				<div>
					<FormNewPassword />
				</div>
			</div>
		</div>
	);
};
