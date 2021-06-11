import React from "react";
import botellaVino from "../../img/botellaVino.png";
import "../../styles/demo.scss";
import { FormChangePassword } from "../component/formChangePassword";

export const ChangePassword = () => {
	return (
		<div className="newPass">
			<div className="formcontainer">
				<div className="red">
					<img src={botellaVino} height="450" />
					<h1 className="text">Change Password</h1>
				</div>
				<div>
					<FormChangePassword />
				</div>
			</div>
		</div>
	);
};
