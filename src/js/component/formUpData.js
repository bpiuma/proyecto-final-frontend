import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import copaVino from "../../img/copaVino.png";
import { Context } from "../store/appContext";

import { useForm } from "react-hook-form";

export const FormUpData = () => {
	const { store, actions } = useContext(Context);

	const { register, handleSubmit } = useForm();
	const onSubmit = data => alert(JSON.stringify(data));

	return (
		<form className="formSign" onSubmit={handleSubmit(onSubmit)}>
			<div className="form-group">
				<label htmlFor="firstName">First Name</label>
				<div className="Grupinput">
					<input className="form-control bg-transparent border-0" type="text" id="firstName" />
				</div>
			</div>

			<div className="form-group">
				<label htmlFor="lastName">Last Name</label>
				<input type="text" className="form-control bg-transparent border-0" id="lastName" />
			</div>

			<div className="form-group">
				<label htmlFor="address">Address</label>
				<input type="text" className="form-control bg-transparent border-0" id="address" />
			</div>

			<div className="form-group">
				<label htmlFor="phone1">Phone 1</label>
				<input type="phone" className="form-control bg-transparent border-0" id="phone1" />
			</div>

			<div className="form-group">
				<label htmlFor="phone2">Phone 2</label>
				<input type="phone" className="form-control bg-transparent border-0" id="phone2" />
			</div>

			<div className="form-group">
				<label htmlFor="dateOfBirth">Date of Birth</label>
				<input type="date" className="form-control bg-transparent border-0" id="dateOfBirth" />
			</div>

			<div className="form-group">
				<label htmlFor="email">Email</label>
				<input
					type="email"
					className="form-control bg-transparent border-0"
					id="email"
					aria-describedby="emailHelp"
				/>
			</div>

			<button type="submit" className="btnLogin">
				Up data
			</button>
		</form>
	);
};
