import React from "react";
import { Link } from "react-router-dom";

export const FormLogin = () => {
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
				{/*<small id="emailHelp" className="form-text text-muted">
					Well never share your email with anyone else.
    </small>*/}
			</div>
			<div className="form-group">
				<label htmlFor="exampleInputPassword1">Password</label>
				<input type="password" className="form-control bg-transparent border-0" id="exampleInputPassword1" />
			</div>

			<button type="submit" className="btnLogin">
				Login
			</button>
			<Link to="/forgetPassword">
				<h1>Forget Password</h1>
			</Link>
			<Link to="/signUp">
				<h1>Sign Up</h1>
			</Link>
		</form>
	);
};
