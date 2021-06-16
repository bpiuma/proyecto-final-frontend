import React from "react";
import { Link } from "react-router-dom";
import provisorio from "../../img/provisorio.jpg";
import botellaCcopa from "../../img/botellaCcopa.svg";
import copaVino from "../../img/copaVino.png";

export const ECommerce = () => {
	return (
		<>
			<div className="container-fluid py-2">
				<header>
					<div>
						<h1>Store</h1>
					</div>
				</header>
				<div className="titleBuy">
					<img className="my-1 mx-1" src={copaVino} width="30" />
					<h1 className="ml-1">Order details</h1>
				</div>
				<div className="purchaseSummary">
					<h5 className="cost">$1590</h5>
					<h5>total</h5>
					<button type="button" className="btn bg-white">
						<i className="fas fa-shopping-cart mr-2" />
						Finish Buy
					</button>
				</div>
				<div className="cardBuy row">
					<img className="ml-1 mt-1" src={provisorio} height="90" />
					<h5 className="NameWine col-4 align-self-center text-center">Name Wine</h5>
					<div className="dropdown align-self-center mt-1">
						<button
							className="btn  dropdown-toggle"
							type="button"
							id="dropdownMenuButton"
							data-toggle="dropdown"
							aria-haspopup="true"
							aria-expanded="false">
							Cant
						</button>
						<div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
							<a className="dropdown-item">1</a>
							<a className="dropdown-item">2</a>
							<a className="dropdown-item">3</a>
							<a className="dropdown-item">4</a>
							<a className="dropdown-item">5</a>
							<a className="dropdown-item">6</a>
							<a className="dropdown-item">7</a>
							<a className="dropdown-item">8</a>
							<a className="dropdown-item">9</a>
							<a className="dropdown-item">10</a>
						</div>
					</div>
					<div className="row costDelete ">
						<h5 className="cost align-self-center ">$1559</h5>
						<i className="fas fa-trash-alt ml-3 align-self-center" />
					</div>
				</div>
			</div>
		</>
	);
};
