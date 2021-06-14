import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Context } from "../store/appContext";

export const FormForgetPassword = () => {
	const { store, actions } = useContext(Context);
	const {
		register,
		handleSubmit,
		formState: { errors }
	} = useForm();
	const [auth, setAuth] = useState(false);
	const [msg, setMsg] = useState("");

	const passRecovery = async data => {
		var myHeaders = new Headers();
		myHeaders.append("Content-Type", "application/json");

		var raw = JSON.stringify(data);

		var requestOptions = {
			method: "POST",
			headers: myHeaders,
			body: raw,
			redirect: "follow"
		};

		fetch(process.env.BACKEND_URL + "/passwordRecovery", requestOptions)
			.then(response => response.json())
			.then(result => {
				console.log(result);
				setAuth(true);
				setMsg(result.message);
			});
	};

	const onSubmit = data => passRecovery(data);

	return (
		<form className="formLogin" onSubmit={handleSubmit(onSubmit)}>
			<div className="form-group">
				<label htmlFor="email">Email</label>
				<input
					//type="email"
					className="form-control bg-transparent border-0"
					id="email"
					aria-describedby="emailHelp"
					{...register("email", {
						required: true
					})}
					placeholder="Please enter your email address"
				/>
				<div className="errorMsg">
					{errors.email && errors.email.type === "required" && <p>This field is required</p>}
				</div>
			</div>
			<button type="submit" className="btnLogin">
				Submit
			</button>
			<div className={auth ? "d-inline" : "d-none"}>
				<p className="alert alert-danger mt-3">{msg}</p>
			</div>
		</form>
	);
};
