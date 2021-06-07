import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

export const FormLogin = () => {
	const { register, handleSubmit } = useForm();
	const onSubmit = data => alert(JSON.stringify(data));

	return (
		<form className="formLogin" onSubmit={handleSubmit(onSubmit)}>
			<div className="form-group">
				<label htmlFor="email">Email</label>
				<input
					type="email"
					className="form-control bg-transparent border-0"
					id="email"
					aria-describedby="emailHelp"
					{...register("email")}
					placeholder="Please enter your email address"
					required
				/>
			</div>
			<div className="form-group">
				<label htmlFor="password">Password</label>
				<input
					type="password"
					className="form-control bg-transparent border-0"
					id="password"
					{...register("password")}
					placeholder="Please enter your password(8 characters min.)"
					required
				/>
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
