import React from "react";
import { Link } from "react-router-dom";
import copaVino from "../../img/copaVino.png";
import { useState } from "react";

export const FormSignUp = () => {
	const [password, setPassword] = useState({ field: "", valid: null });

	const expression = {
		regExPassword: /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/
	};

	const change = e => {
		//console.log(e.target.value);
		setPassword({ ...password, field: e.target.value });
	};

	const validation = () => {
		if (regexp) {
			if (regexp.test(password.field)) {
				console.log("imput correcto");
			}
		} else {
			console.log("imput incorrecto");
		}
	};

	return (
		<form className="formSign">
			<div className="form-group">
				<label htmlFor="name">First Name</label>
				<div className="Grupinput">
					<input
						className="form-control bg-transparent border-0"
						type="text"
						id="name"
						placeholder="Ej.Juan"
						required
					/>
					<i className="fas fa-times-circle" />
				</div>
				{false && (
					<div className="msj">
						<p>Plesa, the name can only contain letters</p>
					</div>
				)}
			</div>

			<div className="form-group">
				<label htmlFor="exampleInputPassword1">Last Name</label>
				<input
					type="text"
					className="form-control bg-transparent border-0"
					id="exampleInputPassword1"
					required
				/>
			</div>

			<div className="form-group">
				<label htmlFor="exampleInputPassword1">Adress</label>
				<input
					type="text"
					className="form-control bg-transparent border-0"
					id="exampleInputPassword1"
					required
				/>
			</div>

			<div className="form-group">
				<label htmlFor="phone">Phone</label>
				<input type="phone" className="form-control bg-transparent border-0" id="phone" required />
			</div>

			<div className="form-group">
				<label htmlFor="phone">Phone</label>
				<input type="phone" className="form-control bg-transparent border-0" id="phone" required />
			</div>

			<div className="form-group">
				<label htmlFor="exampleInputPassword1">Date of birth</label>
				<input
					type="date"
					className="form-control bg-transparent border-0"
					id="exampleInputPassword1"
					required
				/>
			</div>

			<div className="form-group">
				<label htmlFor="exampleInputEmail1">Email</label>
				<input
					type="email"
					className="form-control bg-transparent border-0"
					id="exampleInputEmail1"
					aria-describedby="emailHelp"
					required
				/>
			</div>
			<div className="form-group">
				<label htmlFor="exampleInputPassword1">Password</label>
				<input
					type="password"
					className="form-control bg-transparent border-0"
					id="exampleInputPassword1"
					regexp={expression.regExPassword}
					value={password.field}
					onChange={change}
					onKeyUp={validation}
					onBlur={validation}
				/>
			</div>

			<button type="submit" className="btnLogin">
				Sign Up
			</button>
		</form>
	);
};
