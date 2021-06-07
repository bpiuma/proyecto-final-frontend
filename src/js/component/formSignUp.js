import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import copaVino from "../../img/copaVino.png";
import { Context } from "../store/appContext";

import { useForm } from "react-hook-form";

export const FormSignUp = () => {
	const { store, actions } = useContext(Context);

	const { register, handleSubmit } = useForm();
	const onSubmit = data => alert(JSON.stringify(data));

	return (
		<form className="formSign" onSubmit={handleSubmit(onSubmit)}>
			<div className="form-group">
				<label htmlFor="firstName">First Name</label>
				<div className="Grupinput">
					<input
						className="form-control bg-transparent border-0"
						type="text"
						id="firstName"
						{...register("firstName")}
						placeholder="Please enter your first name"
						autoFocus
						required
					/>
					<i className="fas fa-times-circle" />
				</div>
				{false && (
					<div className="msj">
						<p>Please, the name can only contain letters</p>
					</div>
				)}
			</div>

			<div className="form-group">
				<label htmlFor="lastName">Last Name</label>
				<input
					type="text"
					className="form-control bg-transparent border-0"
					id="lastName"
					{...register("lastName")}
					placeholder="Please enter your last name"
					required
				/>
			</div>

			<div className="form-group">
				<label htmlFor="address">Address</label>
				<input
					type="text"
					className="form-control bg-transparent border-0"
					id="address"
					{...register("address")}
					placeholder="Please enter your address"
					required
				/>
			</div>

			<div className="form-group">
				<label htmlFor="phone1">Phone 1</label>
				<input
					type="phone"
					className="form-control bg-transparent border-0"
					id="phone1"
					{...register("phone1")}
					placeholder="Please enter your movil number"
					required
				/>
			</div>

			<div className="form-group">
				<label htmlFor="phone2">Phone 2</label>
				<input
					type="phone"
					className="form-control bg-transparent border-0"
					id="phone2"
					placeholder="Please enter your fixed number"
					{...register("phone2")}
				/>
			</div>

			<div className="form-group">
				<label htmlFor="dateOfBirth">Date of Birth</label>
				<input
					type="date"
					className="form-control bg-transparent border-0"
					id="dateOfBirth"
					{...register("dateOfBirth")}
					placeholder="Please enter your date of birth(you must be 18 years old to register)"
					required
				/>
			</div>

			<div className="form-group">
				<label htmlFor="email">Email</label>
				<input
					type="email"
					className="form-control bg-transparent border-0"
					id="email"
					aria-describedby="emailHelp"
					{...register("email")}
					placeholder="Please enter your email address"
					required
				/>
			</div>
			<div className="form-group">
				<label htmlFor="password">Password</label>
				<input
					type="password"
					className="form-control bg-transparent border-0"
					id="password"
					{...register("password")}
					placeholder="Please enter your password(8 characters min.)"
					required
				/>
			</div>
			<div className={store.userFailed ? "d-inline" : "d-none"}>
				<p className="alert alert-danger">{store.userFailed ? store.userFailed : ""}</p>
			</div>
			<button type="submit" className="btnLogin">
				Sign Up
			</button>
		</form>
	);
};
