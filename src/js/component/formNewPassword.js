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
				<label htmlFor="password">Set New Password</label>
				<input
					type="password"
					className="form-control bg-transparent border-0"
					id="password"
					{...register("password", {
						required: true,
						validate: value => validatePassword(value)
					})}
					placeholder="Please enter your new password"
				/>
				<div className="errorMsg">
					{errors.password && errors.password.type === "required" && <p>This field is required</p>}
					{errors.password &&
						errors.password.type === "validate" && (
							<p>
								Password length between 8 to 20 characters, and at least 1 lower case, 1 upper case and
								1 digit
							</p>
						)}
				</div>
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
