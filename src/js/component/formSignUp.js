import React from "react";
import { Link } from "react-router-dom";
import copaVino from "../../img/copaVino.png";

export const FormSignUp = () => {
	return (
		<form className="formSign">
			<div className="form-group">
				<label htmlFor="exampleInputPassword1">First Name</label>
				<input type="text" className="form-control bg-transparent border-0" id="exampleInputPassword1" />
			</div>

			<div className="form-group">
				<label htmlFor="exampleInputPassword1">Last Name</label>
				<input type="text" className="form-control bg-transparent border-0" id="exampleInputPassword1" />
			</div>

			<div className="form-group">
				<label htmlFor="exampleInputPassword1">Adress</label>
				<input type="text" className="form-control bg-transparent border-0" id="exampleInputPassword1" />
			</div>

			<div className="form-group">
				<label htmlFor="exampleInputPassword1">Phone</label>
				<input type="number" className="form-control bg-transparent border-0" id="exampleInputPassword1" />
			</div>

			<div className="form-group">
				<label htmlFor="exampleInputPassword1">Phone</label>
				<input type="number" className="form-control bg-transparent border-0" id="exampleInputPassword1" />
			</div>

			<div className="form-group">
				<label htmlFor="exampleInputPassword1">Date of birth</label>
				<input type="date" className="form-control bg-transparent border-0" id="exampleInputPassword1" />
			</div>

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
				<label htmlFor="exampleInputPassword1">Password</label>
				<input type="password" className="form-control bg-transparent border-0" id="exampleInputPassword1" />
			</div>

			<button type="submit" className="btnLogin">
				Sign Up
			</button>
		</form>
	);
};
