const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			]
		},
		actions: {
			loginUser: async data => {
				var myHeaders = new Headers();
				myHeaders.append("Content-Type", "application/json");

				var raw = JSON.stringify(data);

				var requestOptions = {
					method: "POST",
					headers: myHeaders,
					body: raw,
					redirect: "follow"
				};

				fetch(process.env.BACKEND_URL + "/login", requestOptions)
					.then(response => response.json())
					.then(result => {
						console.log(result);
						sessionStorage.setItem("token", result.token);
					})
					.catch(error => console.log("error", error));
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
			},

			newPass: async data => {
				console.log(data);

				// var myHeaders = new Headers();
				// myHeaders.append("Content-Type", "application/json");

				// var raw = JSON.stringify(data);

				// var requestOptions = {
				//     method: "POST",
				//     headers: myHeaders,
				//     body: raw,
				//     redirect: "follow"
				// };

				// fetch(process.env.BACKEND_URL + "/passwordRecovery", requestOptions)
				//     .then(response => response.json())
				//     .then(result => console.log(result))
				//     .catch(error => console.log("error", error));
			},

			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
