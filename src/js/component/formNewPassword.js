import React, { useContext, useState } from "react";
import { useParams } from "react-router-dom";
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

export const FormNewPassword = () => {
	const { store, actions } = useContext(Context);
	const {
		register,
		handleSubmit,
		formState: { errors }
	} = useForm();
	const [auth, setAuth] = useState(false);
	const [msg, setMsg] = useState("");

	//obtenemos el token que viene en la url
	let { token } = useParams();

	//reemplazamos todos los "$" por "."
	let nToken = token.replace("$", ".");
	let newToken = nToken.replace("$", ".");

	//obtenemos los datos del usuario
	let user = actions.parseJWT(newToken).user;
	if (!user) {
		user = actions.parseJWT(newToken).newUser;
	}

	const changePass = async data => {
		var myHeaders = new Headers();
		myHeaders.append("Authorization", newToken);
		myHeaders.append("Content-Type", "application/json");

		var raw = JSON.stringify({
			oldPassword: user.password,
			newPassword: data.newPassword
		});

		var requestOptions = {
			method: "PUT",
			headers: myHeaders,
			body: raw,
			redirect: "follow"
		};

		fetch(process.env.BACKEND_URL + "/user/" + user.id + "/resetPassword", requestOptions)
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
