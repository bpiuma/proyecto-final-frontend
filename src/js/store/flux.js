const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			userName: sessionStorage.getItem("userName") ? sessionStorage.getItem("userName") : null,
			token: sessionStorage.getItem("token") ? sessionStorage.getItem("token") : null,
			products: [],
			favorites: null
		},
		actions: {
			setUser: (username, tok) => {
				setStore({ userName: username, token: tok });
			},
			setFavorites: favs => {
				setStore({ favorites: favs });
			},
			loadData: () => {
				const baseURL = "https://3001-indigo-catfish-h5cpn5a9.ws-us09.gitpod.io/";
				const fetchProductsData = async () => {
					try {
						const response = await fetch(baseURL + "products");
						const responseJson = await response.json();
						setStore({ products: responseJson.results });
					} catch (e) {
						console.error(e);
					}
				};
				fetchProductsData();
				if (getStore().token != null) getActions().getUserFavs();
			},
			addToCart: (userId, productId) => {},

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
