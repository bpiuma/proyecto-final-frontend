import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Context } from "../store/appContext";

export const FormNewPassword = () => {
	const { store, actions } = useContext(Context);
	const { register, handleSubmit } = useForm();
	const [pass, setPass] = useState(false);

	const onSubmit = data => {
		actions.newPass(data);
		setPass(true);
	};

	return (
		<form className="formLogin" onSubmit={handleSubmit(onSubmit)}>
			<div className="form-group">
				<label htmlFor="password">Password</label>
				<input
					type="password"
					className="form-control bg-transparent border-0"
					id="password"
					{...register("password")}
					placeholder="Please enter your new password"
					required
				/>
			</div>
			<button type="submit" className="btnLogin">
				Submit
			</button>
			{pass ? (
				<div className="msj mt-3">
					<p>Password succesfully changed</p>
				</div>
			) : (
				""
			)}
		</form>
	);
};
