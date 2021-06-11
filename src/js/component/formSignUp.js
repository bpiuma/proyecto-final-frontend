import React, { useContext, useState } from "react";
import { Redirect } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Context } from "../store/appContext";

export const FormSignUp = () => {
	const { store, actions } = useContext(Context);
	const {
		register,
		handleSubmit,
		formState: { errors }
	} = useForm();
	const [auth, setAuth] = useState(false);
	const [msg, setMsg] = useState("");

	// funcion para validar el formato del email
	const validateEmail = email => {
		const res = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		return res.test(email);
	};

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

	const createUser = async data => {
		var myHeaders = new Headers();
		myHeaders.append("Content-Type", "application/json");

		var raw = JSON.stringify(data);

		var requestOptions = {
			method: "POST",
			headers: myHeaders,
			body: raw,
			redirect: "follow"
		};

		console.log(process.env.BACKEND_URL + "/user");

		fetch(process.env.BACKEND_URL + "/user", requestOptions)
			.then(response => response.json())
			.then(result => {
				console.log(result);
				if (result.message == "User created successfully") {
					setAuth(true);
					sessionStorage.setItem("userName", actions.parseJWT(result.token).newUser.first_name);
					sessionStorage.setItem("token", result.token);
					actions.setUser(actions.parseJWT(result.token).newUser.first_name, result.token);
				} else {
					setMsg(result.message);
				}
			})
			.catch(error => console.log("error", error));
	};

	const onSubmit = data => createUser(data);

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
						placeholder="Please enter your first name"
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
					placeholder="Please enter your last name"
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
					placeholder="Please enter your address"
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
					placeholder="Please enter your movil number"
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
					placeholder="Please enter your fixed number"
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
					placeholder="Please enter your date of birth(you must be 18 years old to register)"
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
					placeholder="Please enter your email address"
				/>
				<div className="errorMsg">
					{errors.email && errors.email.type === "required" && <p>This field is required</p>}
					{errors.email && errors.email.type === "validate" && <p>Not valid email</p>}
				</div>
			</div>

			<div className="form-group">
				<label htmlFor="password">Password</label>
				<input
					type="password"
					className="form-control bg-transparent border-0"
					id="password"
					{...register("password", {
						required: true,
						validate: value => validatePassword(value)
					})}
					placeholder="Please enter your password"
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

			<div>{auth ? <Redirect to="/" /> : msg != "" ? <p className="alert alert-danger">{msg}</p> : ""}</div>

			<button type="submit" className="btn btnLogin float-right">
				Register
			</button>
		</form>
	);
};
