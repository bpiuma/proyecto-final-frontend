import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/home";
import { Login } from "./views/login";
import { Single } from "./views/single";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import { ForgetPassword } from "./views/forgetPassword.js";
import { NewPassword } from "./views/newPassword.js";
import { ChangePassword } from "./views/changePassword.js";
import { SignUp } from "./views/signUp";
import { Store } from "./views/store";
import { UpData } from "./views/upData";
import { Favourite } from "./views/favourite";
//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div className="d-flex flex-column">
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar />
					<Switch>
						<Route exact path="/">
							<Home />
						</Route>
						<Route exact path="/upData">
							<UpData />
						</Route>
						<Route exact path="/login">
							<Login />
						</Route>
						<Route exact path="/favourite">
							<Favourite />
						</Route>
						<Route exact path="/forgetPassword">
							<ForgetPassword />
						</Route>
						<Route path="/newPassword">
							<NewPassword />
						</Route>
						<Route path="/changePassword">
							<ChangePassword />
						</Route>
						<Route exact path="/signUp">
							<SignUp />
						</Route>
						<Route exact path="/store">
							<Store />
						</Route>
						<Route exact path="/single/:theid">
							<Single />
						</Route>
						<Route>
							<h1>Not found!</h1>
						</Route>
					</Switch>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
