import React, { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Context } from "../store/appContext";
import Swal from "sweetalert2";

export const FormActivateUser = () => {
	const { store, actions } = useContext(Context);
	const {
		register,
		handleSubmit,
		formState: { errors }
	} = useForm();

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

	const alert = (msg, type) => {
		Swal.fire({
			title: msg,
			//text: "Your purchase is being processed",
			icon: type,
			showCancelButton: false,
			confirmButtonText: "OK"
		}).then(result => {
			if (result.isConfirmed) {
				//window.location = "/";
			}
		});
	};

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
				alert(result.message, "success");
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
		</form>
	);
};
