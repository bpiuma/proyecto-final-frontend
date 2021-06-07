import React from "react";
import { Link } from "react-router-dom";
import copaVino from "../../img/copaVino.png";
import { useForm } from "react-hook-form";

export const FormForgetPassword = () => {
	const { register, handleSubmit } = useForm();
	const onSubmit = data => alert(JSON.stringify(data));
	return (
		<form className="formLogin">
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
				<label htmlFor="password">New Password</label>
				<input
					type="password"
					className="form-control bg-transparent border-0"
					id="password"
					{...register("password")}
					placeholder="Please enter your password(8 characters min.)"
					required
				/>
			</div>
			<div className="form-group">
				<label htmlFor="password">Confirm Password</label>
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
				Submit
			</button>
		</form>
	);
};
