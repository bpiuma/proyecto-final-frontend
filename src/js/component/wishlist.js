import React from "react";
import { Link } from "react-router-dom";
import provisorio from "../../img/provisorio.jpg";
import botellaCcopa from "../../img/botellaCcopa.svg";
import copaVino from "../../img/copaVino.png";

export const Wishlist = () => {
	return (
		<div className="wishlist">
			<div className="titleBuy">
				<img className="my-1 mx-1" src={copaVino} width="30" />
				<h1 className="ml-1">Favourite</h1>
			</div>
			<div className="cardFav">
				<div className="hederFavCard px-1 py-1">
					<div className="imgCard">
						<img src={provisorio} />
					</div>
					<div className="infoCard">
						<p>jgsdgjsdjskdhjsd;hsd jhsdjdhjsdhlsdhl;s</p>
						<div className="ico">
							<h2>$ 1254</h2>
							<i className="fas fa-shopping-cart text-white mr-3" />
							<i className="far herart fa-heart" />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
