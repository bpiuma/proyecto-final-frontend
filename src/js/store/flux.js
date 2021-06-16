import { set } from "react-hook-form";

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			userName: sessionStorage.getItem("userName") ? sessionStorage.getItem("userName") : null,
			token: sessionStorage.getItem("token") ? sessionStorage.getItem("token") : null,
			products: [],
			favorites: [],
			productDetails: {},
			messages: { message: null, icon: null }
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
				if (getStore().token != null) getActions().getUserFavs();
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
			},
			addToCart: async (userid, productid) => {
				let myHeaders = new Headers();
				const store = getStore();
				myHeaders.append("Authorization", store.token);
				myHeaders.append("Content-Type", "application/json");
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
						setStore({ messages: { message: responseJson.message, icon: "success" } });
					} catch (e) {
						setStore({ messages: { message: "Session Expired, please log in again", icon: "error" } });
						console.error(e);
					}
				};
				await fetchData();
				//return store.messages;
			},
			addToFavorites: async (userid, productid) => {
				let myHeaders = new Headers();
				const store = getStore();
				myHeaders.append("Authorization", store.token);
				myHeaders.append("Content-Type", "application/json");

				let requestOptions = {
					method: "POST",
					headers: myHeaders,
					redirect: "follow"
				};
				const fetchData = async () => {
					try {
						const response = await fetch(
							process.env.BACKEND_URL + "/favorite/add/user/" + userid + "/product/" + productid,
							requestOptions
						);
						const responseJson = await response.json();
						if (responseJson.message.indexOf("successfully") !== -1)
							setStore({ messages: { message: responseJson.message, icon: "success" } });
						else setStore({ messages: { message: responseJson.message, icon: "info" } });
					} catch (e) {
						setStore({ messages: { message: "Session Expired, please log in again", icon: "error" } });
						console.error(e);
					}
				};
				await fetchData();
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
