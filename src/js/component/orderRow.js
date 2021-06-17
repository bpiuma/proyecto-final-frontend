import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";

export const OrderRow = props => {
	const { store, actions } = useContext(Context);
	const [cant, setCant] = useState(props.quantity);
	const [amount, setAmount] = useState(props.amount);
	const [show, setShow] = useState(true);

	let userId = actions.parseJWT(store.token).user.id;

	const addProduct = async (productId, price) => {
		var myHeaders = new Headers();
		myHeaders.append("Authorization", store.token);
		myHeaders.append("Content-Type", "application/json");
		var raw = JSON.stringify({
			cant: 1
		});
		var requestOptions = {
			method: "POST",
			headers: myHeaders,
			body: raw,
			redirect: "follow"
		};
		fetch(process.env.BACKEND_URL + "/cart/add/user/" + userId + "/product/" + productId, requestOptions)
			.then(response => response.json())
			.then(result => {
				console.log(result);
				setCant(cant + 1);
				setAmount(amount + price);
				actions.setTotalAmount(store.totalAmount + price);
			})
			.catch(error => console.log("error", error));
	};

	const subsProduct = async (productId, price) => {
		var myHeaders = new Headers();
		myHeaders.append("Authorization", store.token);
		myHeaders.append("Content-Type", "application/json");
		var raw = JSON.stringify({
			cant: 1
		});
		var requestOptions = {
			method: "POST",
			headers: myHeaders,
			body: raw,
			redirect: "follow"
		};
		fetch(process.env.BACKEND_URL + "/cart/substract/user/" + userId + "/product/" + productId, requestOptions)
			.then(response => response.json())
			.then(result => {
				console.log(result);
				setCant(cant - 1);
				setAmount(amount - price);
				actions.setTotalAmount(store.totalAmount - price);
			})
			.catch(error => console.log("error", error));
	};

	const delProduct = async (productId, amount) => {
		var myHeaders = new Headers();
		myHeaders.append("Authorization", store.token);
		var requestOptions = {
			method: "DELETE",
			headers: myHeaders,
			redirect: "follow"
		};
		fetch(process.env.BACKEND_URL + "/cart/delete/user/" + userId + "/product/" + productId, requestOptions)
			.then(response => response.json())
			.then(result => {
				console.log(result);
				actions.setTotalAmount(store.totalAmount - amount);
				setShow(false);
			})
			.catch(error => console.log("error", error));
	};

	return (
		<div className={show ? "row" : "d-none"}>
			<div className="col-3">
				<img className="ml-1 mt-1" src={props.image} width="150" />
			</div>
			<div className="col-4 d-flex align-items-center">
				<h5>{props.name}</h5>
			</div>
			<div className="col-2 d-flex align-items-center justify-content-right">
				<i
					className="orderIcon col-4 fas fa-minus-circle"
					onClick={() => {
						cant > 1 ? subsProduct(props.id, props.price) : "";
					}}
				/>
				<div className="col-4 p-4">
					<h5>{cant}</h5>
				</div>
				<i className="orderIcon col-4 fas fa-plus-circle" onClick={() => addProduct(props.id, props.price)} />
			</div>
			<div className="col-3 d-flex align-items-center justify-content-between">
				<h5 className="col-8 text-right">{"$ " + amount}</h5>
				<div className="col-2">
					<i className="orderIcon fas fa-trash-alt" onClick={() => delProduct(props.id, amount)} />
				</div>
				<div className="col-2" />
			</div>
		</div>
	);
};

OrderRow.propTypes = {
	image: PropTypes.string,
	name: PropTypes.string,
	quantity: PropTypes.number,
	id: PropTypes.number,
	amount: PropTypes.number,
	price: PropTypes.number
};
