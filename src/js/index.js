//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

//include bootstrap npm library into the bundle
import "bootstrap";

//include your index.scss file into the bundle
import "../styles/index.scss";

//import your own components
import SecondsCounter from "./component/SecondsCounter.jsx";

//render your react application
let count = 0;

setInterval(() => {
	ReactDOM.render(
		<SecondsCounter count={count} />,
		document.querySelector("#app")
	);
	count++;
}, 1000);
