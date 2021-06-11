import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Context } from "../store/appContext";

// funcion para validar el formato del password
const validatePassword = pass => {
	if (pass.length >= 8 && pass.length <= 20) {
		var mayusc = false;
		var minusc = false;
		var num = false;
		for (var i = 0; i < pass.length; i++) {
			if (pass.charCodeAt(i) >= 65 && pass.charCodeAt(i) <= 90) mayusc = true;
			else if (pass.charCodeAt(i) >= 97 && pass.charCodeAt(i) <= 122) minusc = true;
			else if (pass.charCodeAt(i) >= 48 && pass.charCodeAt(i) <= 57) num = true;
		}
		if (mayusc == true && minusc == true && num == true) return true;
	}
	return false;
};

export const FormChangePassword = () => {
	const { store, actions } = useContext(Context);
	const {
		register,
		handleSubmit,
		formState: { errors }
	} = useForm();
	const [auth, setAuth] = useState(false);
	const [msg, setMsg] = useState("");

	const changePass = async data => {
		var myHeaders = new Headers();
		myHeaders.append("Authorization", store.token);
		myHeaders.append("Content-Type", "application/json");

		var raw = JSON.stringify({
			oldPassword: data.oldPassword,
			newPassword: data.newPassword
		});

		var requestOptions = {
			method: "PUT",
			headers: myHeaders,
			body: raw,
			redirect: "follow"
		};

		let userId = actions.parseJWT(store.token).user.id;

		fetch(process.env.BACKEND_URL + "/user/" + userId + "/resetPassword", requestOptions)
			.then(response => response.json())
			.then(result => {
				console.log(result);
				setAuth(true);
				setMsg(result.message);
			})
			.catch(error => console.log("error", error));
	};

	const onSubmit = data => changePass(data);

	return (
		<form className="formLogin" onSubmit={handleSubmit(onSubmit)}>
			<div className="form-group">
				<label htmlFor="password">Old Password</label>
				<input
					type="password"
					className="form-control bg-transparent border-0"
					id="oldPassword"
					{...register("oldPassword", {
						required: true
					})}
					placeholder="Please enter your old password"
				/>
				<div className="errorMsg">
					{errors.oldPassword && errors.oldPassword.type === "required" && <p>This field is required</p>}
				</div>
			</div>
			<div className="form-group">
				<label htmlFor="password">New Password</label>
				<input
					type="password"
					className="form-control bg-transparent border-0"
					id="newPassword"
					{...register("newPassword", {
						required: true,
						validate: value => validatePassword(value)
					})}
					placeholder="Please enter your new password"
				/>
				<div className="errorMsg">
					{errors.newPassword && errors.newPassword.type === "required" && <p>This field is required</p>}
					{errors.newPassword &&
						errors.newPassword.type === "validate" && (
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
			<div className={auth ? "d-inline" : "d-none"}>
				<p className="alert alert-danger mt-3">{msg}</p>
			</div>
		</form>
	);
};
