//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

//include bootstrap npm library into the bundle
import "bootstrap/dist/css/bootstrap.css";

//include your index.scss file into the bundle
import "../styles/index.scss";

//import font-awsome
import "font-awesome/css/font-awesome.min.css";

//import google fonds
// @import 'https://fonts.googleapis.com/css?family=Josefin+Sans'

//import your own components
import Layout from "./layout";

//render your react application
ReactDOM.render(<Layout />, document.querySelector("#app"));
