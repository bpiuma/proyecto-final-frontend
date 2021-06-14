import React, { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Context } from "../store/appContext";

export const FormActivateUser = () => {
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

		var raw = "";

		var requestOptions = {
			method: "PUT",
			headers: myHeaders,
			body: raw,
			redirect: "follow"
		};

		fetch(process.env.BACKEND_URL + "/user/" + user.id + "/activateUser", requestOptions)
			.then(response => response.json())
			.then(result => {
				console.log(result);
				setAuth(true);
				setMsg("Registration completed successfully");
			})
			.catch(error => console.log("error", error));
	};

	const onSubmit = data => changePass(data);

	return (
		<form className="formLogin" onSubmit={handleSubmit(onSubmit)}>
			<div>
				<p>To finish the process, please click on the following button:</p>
			</div>
			<button type="submit" className="btnLogin">
				Finish
			</button>
			<div className={auth ? "d-inline" : "d-none"}>
				<p className="alert alert-danger mt-3">{msg}</p>
			</div>
		</form>
	);
};
