import React, { useState, useContext } from "react";
import { Redirect } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Context } from "../store/appContext";
import Swal from "sweetalert2";

export const FormUpData = () => {
	const { store, actions } = useContext(Context);
	const {
		register,
		handleSubmit,
		formState: { errors }
	} = useForm();

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

	// funcion para validar el formato del email
	const validateEmail = email => {
		const res = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		return res.test(email);
	};

	const user = actions.parseJWT(store.token).user;

	const updateUser = async data => {
		var myHeaders = new Headers();
		myHeaders.append("Authorization", store.token);
		myHeaders.append("Content-Type", "application/json");
		var raw = JSON.stringify(data);
		var requestOptions = {
			method: "PUT",
			headers: myHeaders,
			body: raw,
			redirect: "follow"
		};
		fetch(process.env.BACKEND_URL + "/user/" + user.id, requestOptions)
			.then(response => response.json())
			.then(result => {
				console.log(result);
				if (result.message == "There is another user with this email") {
					alert(result.message, "error");
				}
				if (result.message == "User updated successfully") {
					alert(result.message, "success");
				}
			})
			.catch(error => console.log("error", error));
	};

	const onSubmit = data => updateUser(data);

	return (
		<form className="formSign" onSubmit={handleSubmit(onSubmit)}>
			<div className="form-group">
				<label htmlFor="first_name">First Name</label>
				<div className="Grupinput">
					<input
						className="form-control bg-transparent border-0"
						type="text"
						id="first_name"
						{...register("first_name", {
							required: true,
							pattern: /^[A-Za-z]+$/i
						})}
						defaultValue={user.first_name}
						autoFocus
					/>
				</div>
				<div className="errorMsg">
					{errors.first_name && errors.first_name.type === "required" && <p>This field is required</p>}
					{errors.first_name && errors.first_name.type === "pattern" && <p>Alphabetical characters only</p>}
				</div>
			</div>

			<div className="form-group">
				<label htmlFor="last_name">Last Name</label>
				<input
					type="text"
					className="form-control bg-transparent border-0"
					id="last_name"
					{...register("last_name", {
						required: true,
						pattern: /^[A-Za-z]+$/i
					})}
					defaultValue={user.last_name}
				/>
				<div className="errorMsg">
					{errors.last_name && errors.last_name.type === "required" && <p>This field is required</p>}
					{errors.last_name && errors.last_name.type === "pattern" && <p>Alphabetical characters only</p>}
				</div>
			</div>

			<div className="form-group">
				<label htmlFor="address">Address</label>
				<input
					type="text"
					className="form-control bg-transparent border-0"
					id="address"
					{...register("address", { required: true })}
					defaultValue={user.address}
				/>
				<div className="errorMsg">
					{errors.address && errors.address.type === "required" && <p>This field is required</p>}
				</div>
			</div>

			<div className="form-group">
				<label htmlFor="phone_1">Phone 1</label>
				<input
					type="phone"
					className="form-control bg-transparent border-0"
					id="phone_1"
					{...register("phone_1", {
						required: true,
						pattern: /^[0-9]+$/i
					})}
					defaultValue={user.phone_1}
				/>
				<div className="errorMsg">
					{errors.phone_1 && errors.phone_1.type === "required" && <p>This field is required</p>}
					{errors.phone_1 && errors.phone_1.type === "pattern" && <p>Numerical characters only</p>}
				</div>
			</div>

			<div className="form-group">
				<label htmlFor="phone_2">Phone 2</label>
				<input
					type="phone"
					className="form-control bg-transparent border-0"
					id="phone_2"
					{...register("phone_2", {
						required: true,
						pattern: /^[0-9]+$/i
					})}
					defaultValue={user.phone_2}
				/>
				<div className="errorMsg">
					{errors.phone_2 && errors.phone_2.type === "required" && <p>This field is required</p>}
					{errors.phone_2 && errors.phone_2.type === "pattern" && <p>Numerical characters only</p>}
				</div>
			</div>

			<div className="form-group">
				<label htmlFor="date_of_birth">Date of Birth</label>
				<input
					type="date"
					className="form-control bg-transparent border-0"
					id="date_of_birth"
					{...register("date_of_birth", { required: true })}
					defaultValue={user.date_of_birth}
				/>
				<div className="errorMsg">
					{errors.date_of_birth && errors.date_of_birth.type === "required" && <p>This field is required</p>}
				</div>
			</div>

			<div className="form-group">
				<label htmlFor="email">Email</label>
				<input
					type="email"
					className="form-control bg-transparent border-0"
					id="email"
					aria-describedby="emailHelp"
					{...register("email", {
						required: true,
						validate: value => validateEmail(value)
					})}
					defaultValue={user.email}
				/>
				<div className="errorMsg">
					{errors.email && errors.email.type === "required" && <p>This field is required</p>}
					{errors.email && errors.email.type === "validate" && <p>Not valid email</p>}
				</div>
			</div>

			<button type="submit" className="btnLogin">
				Up data
			</button>
		</form>
	);
};
