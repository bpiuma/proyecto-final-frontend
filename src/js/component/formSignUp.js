import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { Context } from "../store/appContext";

export const FormSignUp = () => {
	const { store, actions } = useContext(Context);
	const {
		register,
		handleSubmit,
		formState: { errors }
	} = useForm();

	const onSubmit = data => actions.createUser(data);

	return (
		<form className="formSign" onSubmit={handleSubmit(onSubmit)}>
			<div className="form-group">
				<label htmlFor="first_name">First Name</label>
				<div className="Grupinput">
					<input
						className="form-control bg-transparent border-0"
						type="text"
						id="first_name"
						{...register("first_name")}
						placeholder="Please enter your first name"
						autoFocus
						required
					/>
					{errors.first_name && <span>This field is required</span>}
					<i className="fas fa-times-circle" />
				</div>
				{false && (
					<div className="msj">
						<p>Please, the name can only contain letters</p>
					</div>
				)}
			</div>

			<div className="form-group">
				<label htmlFor="last_name">Last Name</label>
				<input
					type="text"
					className="form-control bg-transparent border-0"
					id="last_name"
					{...register("last_name")}
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
				<label htmlFor="phone_1">Phone 1</label>
				<input
					type="phone"
					className="form-control bg-transparent border-0"
					id="phone_1"
					{...register("phone_1")}
					placeholder="Please enter your movil number"
					required
				/>
			</div>

			<div className="form-group">
				<label htmlFor="phone_2">Phone 2</label>
				<input
					type="phone"
					className="form-control bg-transparent border-0"
					id="phone_2"
					placeholder="Please enter your fixed number"
					{...register("phone_2")}
				/>
			</div>

			<div className="form-group">
				<label htmlFor="date_of_birth">Date of Birth</label>
				<input
					type="date"
					className="form-control bg-transparent border-0"
					id="date_of_birth"
					{...register("date_of_birth")}
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
