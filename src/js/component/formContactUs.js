import React, { useContext, useState } from "react";
import { Redirect } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Context } from "../store/appContext";

export const FormContactUs = () => {
	const { store, actions } = useContext(Context);

	return (
		<form className="formSign">
			<div className="form-group">
				<label htmlFor="first_name">First Name</label>
				<div className="Grupinput">
					<input
						className="form-control bg-transparent border-0"
						type="text"
						id="first_name"
						placeholder="Please enter your first name"
						autoFocus
					/>
				</div>
			</div>

			<div className="form-group">
				<label htmlFor="last_name">Last Name</label>
				<input
					type="text"
					className="form-control bg-transparent border-0"
					id="last_name"
					placeholder="Please enter your last name"
				/>
			</div>

			<div className="form-group">
				<label htmlFor="Wineries">Wineries</label>
				<input
					type="text"
					className="form-control bg-transparent border-0"
					id="Wineries"
					placeholder="Please enter your Wineries"
				/>
			</div>

			<div className="form-group">
				<label htmlFor="phone_1">Phone </label>
				<input
					type="phone"
					className="form-control bg-transparent border-0"
					id="phone_1"
					placeholder="Please enter your movil number"
				/>
			</div>

			<div className="form-group">
				<label htmlFor="email">Email</label>
				<input
					type="email"
					className="form-control bg-transparent border-0"
					id="email"
					aria-describedby="emailHelp"
					placeholder="Please enter your email address"
				/>
			</div>
			<div className="form-group">
				<label htmlFor="Message">Message</label>
				<textarea className="form-control bg-transparent border-0" id="Message" rows="3" />
			</div>

			<button type="submit" className="btn btnLogin float-right">
				Send
			</button>
		</form>
	);
};
