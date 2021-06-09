import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Context } from "../store/appContext";

export const FormForgetPassword = () => {
	const { store, actions } = useContext(Context);
	const { register, handleSubmit } = useForm();
	const [email, setEmail] = useState(false);

	const onSubmit = data => {
		actions.passRecovery(data);
		setEmail(true);
	};

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
			<button type="submit" className="btnLogin">
				Submit
			</button>
			{email ? (
				<div className="msj mt-3">
					<p>Please check your mailbox</p>
				</div>
			) : (
				""
			)}
		</form>
	);
};
