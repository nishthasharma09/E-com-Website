import React from "react";
import { Router } from "react-router";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/Homepage/homepage";
import ShopPage from "./pages/shop/shoppage";

function App() {
	return (
		<div>
			<Switch>
				<Route exact path="/" component={HomePage} />
				<Route path="/shop" component={ShopPage} />
			</Switch>
		</div>
	);
}

export default App;
