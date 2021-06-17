import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Context } from "../store/appContext";
import Swal from "sweetalert2";

export const FormForgetPassword = () => {
	const { store, actions } = useContext(Context);
	const {
		register,
		handleSubmit,
		formState: { errors }
	} = useForm();
	const [auth, setAuth] = useState(false);
	const [msg, setMsg] = useState("");

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
				if (result.message == "Invalid email") {
					alert(result.message, "error");
				}
				if (result.message == "Please check your mailbox") {
					alert(result.message, "success");
				}
			});
	};

	const onSubmit = data => passRecovery(data);

	return (
		<form className="formLogin" onSubmit={handleSubmit(onSubmit)}>
			<div className="form-group">
				<label htmlFor="email">Email</label>
				<input
					className="form-control bg-transparent border-0"
					id="email"
					aria-describedby="emailHelp"
					{...register("email", {
						required: true
					})}
					placeholder="Please enter your email address"
				/>
				<div className="errorMsg">
					{errors.email &&
						errors.email.type === "required" && <p className="small">This field is required</p>}
				</div>
			</div>
			<button type="submit" className="btnLogin">
				Submit
			</button>
		</form>
	);
};
