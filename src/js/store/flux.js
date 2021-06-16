import { set } from "react-hook-form";

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			userName: sessionStorage.getItem("userName") ? sessionStorage.getItem("userName") : null,
			token: sessionStorage.getItem("token") ? sessionStorage.getItem("token") : null,
			products: [],
			favorites: [],
			productDetails: {},
			messageCart: sessionStorage.getItem("messageCart") ? sessionStorage.getItem("messageCart") : null
		},
		actions: {
			setUser: (username, tok) => {
				setStore({ userName: username, token: tok });
			},
			setFavorites: favs => {
				setStore({ favorites: favs });
			},
			loadData: () => {
				const fetchProductsData = async () => {
					try {
						const response = await fetch(process.env.BACKEND_URL + "/products");
						const responseJson = await response.json();
						setStore({ products: responseJson.results });
					} catch (e) {
						console.error(e);
					}
				};
				fetchProductsData();
				//if (getStore().token != null) getActions().getUserFavs();
			},
			loadProductDetails: productid => {
				const fetchProductData = async () => {
					try {
						const response = await fetch(process.env.BACKEND_URL + "/products/" + productid);
						const responseJson = await response.json();
						//console.log(responseJson.results);
						setStore({ productDetails: responseJson.results });
					} catch (e) {
						console.error(e);
					}
				};
				fetchProductData();
				return () => console.log("loading in productDetails...");
			},
			addToCart: (userid, productid) => {
				let myHeaders = new Headers();
				const store = getStore();
				myHeaders.append("Authorization", store.token);
				myHeaders.append("Content-Type", "application/json");
				let msg;
				let raw = JSON.stringify({
					cant: 1
				});

				let requestOptions = {
					method: "POST",
					headers: myHeaders,
					body: raw,
					redirect: "follow"
				};
				const fetchData = async () => {
					try {
						const response = await fetch(
							process.env.BACKEND_URL + "/cart/add/user/" + userid + "/product/" + productid,
							requestOptions
						);
						const responseJson = await response.json();
						console.log(responseJson.message);
						sessionStorage.setItem("messageCart", responseJson.message);
						setStore({ messageCart: responseJson.message });
					} catch (e) {
						console.error(e);
					}
				};
				fetchData();
				return store.messageCart;
			},
			getUserFavs: async () => {
				var myHeaders = new Headers();
				myHeaders.append("Authorization", getStore().token);
				var requestOptions = {
					method: "GET",
					headers: myHeaders,
					redirect: "follow"
				};
				let userId = getActions().parseJWT(getStore().token).user.id;
				fetch(process.env.BACKEND_URL + "/favorite/user/" + userId, requestOptions)
					.then(response => response.json())
					.then(result => {
						setStore({ favorites: result });
					})
					.catch(error => console.log("error", error));
			},
			logout: async token => {
				var myHeaders = new Headers();
				myHeaders.append("Authorization", token);
				myHeaders.append("Content-Type", "application/json");

				var raw = JSON.stringify({
					token: token
				});

				var requestOptions = {
					method: "DELETE",
					headers: myHeaders,
					body: raw,
					redirect: "follow"
				};

				fetch(process.env.BACKEND_URL + "/logout", requestOptions)
					.then(response => response.text())
					.then(result => {
						console.log(result);
					})
					.catch(error => console.log("error", error));
			},

			parseJWT: token => {
				var segments = token.split(".");
				if (!segments instanceof Array || segments.length !== 3) {
					throw new Error("Invalid JWT");
				}
				var claims = segments[1];
				return JSON.parse(decodeURIComponent(escape(window.atob(claims))));
			},
			passRecovery: async data => {
				var myHeaders = new Headers();
				myHeaders.append("Content-Type", "application/json");

				var raw = JSON.stringify(data);

				var requestOptions = {
					method: "POST",
					headers: myHeaders,
					body: raw,
					redirect: "follow"
				};
				fetch(process.env.BACKEND_URL + "/passwordRecovery", requestOptions)
					.then(response => response.json())
					.then(result => console.log(result))
					.catch(error => console.log("error", error));
			}
		}
	};
};

export default getState;
