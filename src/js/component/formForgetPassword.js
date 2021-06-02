import React from "react";
import { Link } from "react-router-dom";
import copaVino from "../../img/copaVino.png";

export const FormForgetPassword = () => {
	return (
		<form className="formLogin">
			<div className="form-group">
				<label htmlFor="exampleInputEmail1">Email</label>
				<input
					type="email"
					className="form-control bg-transparent border-0"
					id="exampleInputEmail1"
					aria-describedby="emailHelp"
				/>
			</div>
			<div className="form-group">
				<label htmlFor="exampleInputPassword1">New Password</label>
				<input type="password" className="form-control bg-transparent border-0" id="exampleInputPassword1" />
			</div>
			<div className="form-group">
				<label htmlFor="exampleInputPassword1">Confirm Password</label>
				<input type="password" className="form-control bg-transparent border-0" id="exampleInputPassword1" />
			</div>

			<button type="submit" className="btnLogin">
				Submit
			</button>
		</form>
	);
};
