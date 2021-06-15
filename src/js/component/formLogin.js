import React, { useContext, useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Context } from "../store/appContext";

export const FormLogin = () => {
	const { store, actions } = useContext(Context);
	const {
		register,
		handleSubmit,
		formState: { errors }
	} = useForm();
	const [auth, setAuth] = useState(false);
	const [msg, setMsg] = useState("");

	const loginUser = async data => {
		var myHeaders = new Headers();
		myHeaders.append("Content-Type", "application/json");

		var raw = JSON.stringify(data);

		var requestOptions = {
			method: "POST",
			headers: myHeaders,
			body: raw,
			redirect: "follow"
		};

		fetch("https://3001-indigo-catfish-h5cpn5a9.ws-us09.gitpod.io" + "/login", requestOptions)
			.then(response => response.json())
			.then(result => {
				if (result.message == undefined) {
					console.log(result);
					setAuth(true);
					sessionStorage.setItem("userName", actions.parseJWT(result.token).user.first_name);
					sessionStorage.setItem("token", result.token);
					actions.setUser(actions.parseJWT(result.token).user.first_name, result.token);
					actions.getUserFavs();
				} else {
					setMsg(result.message);
				}
			})
			.catch(error => console.log("error", error));
	};

	const onSubmit = data => loginUser(data);

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

			<div className="form-group">
				<label htmlFor="password">Password</label>
				<input
					type="password"
					className="form-control bg-transparent border-0"
					id="password"
					{...register("password", {
						required: true
					})}
					placeholder="Please enter your password"
				/>
				<div className="errorMsg">
					{errors.password &&
						errors.password.type === "required" && <p className="small">This field is required</p>}
				</div>
			</div>

			<div>{auth ? <Redirect to="/" /> : msg != "" ? <p className="alert alert-danger">{msg}</p> : ""}</div>

			<button type="submit" className="btnLogin">
				Login
			</button>
			<div className="textForgetSignUp">
				<Link to="/forgetPassword">
					<h1>Forget Password</h1>
				</Link>
				<Link to="/signUp">
					<h1>Sign Up</h1>
				</Link>
			</div>
		</form>
	);
};
