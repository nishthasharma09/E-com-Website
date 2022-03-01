import React from "react";
import "./App.css";
import HomePage from "./pages/Homepage/homepage";
import ShopPage from "./pages/shop/shoppage";
import Header from "./components/header/header";
import SignInAndSignUpPage from "./pages/user-auth/user-auth";
import { auth } from "./firebase/firebase.utils";
import { createUserProfileDocument } from "./firebase/firebase.utils";
import { connect } from "react-redux";
import { setCurrentUser } from "./redux/user/user.actions";
import Checkout from "./pages/checkout/checkout";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { selectCurrentUser } from "./redux/user/user.selectors";
import { createStructuredSelector } from "reselect";

class App extends React.Component {
	unsubscribleFromAuth = null;
	componentDidMount() {
		const { setCurrentUser } = this.props;

		this.unsubscribleFromAuth = auth.onAuthStateChanged(async (userAuth) => {
			if (userAuth) {
				const userRef = await createUserProfileDocument(userAuth);

				userRef.onSnapshot((snapShot) => {
					setCurrentUser({
						currentUser: {
							if: snapShot.id,
							...snapShot.data(),
						},
					});
				});
			} else {
				setCurrentUser(userAuth);
			}
		});
	}

	componentWillUnmount() {
		this.unsubscribleFromAuth();
	}

	render() {
		return (
			<div>
				<BrowserRouter>
					<Header />
					<Routes>
						<Route path="/" element={<HomePage />} />
						<Route path="/shop" element={<ShopPage />} />

						<Route
							exact
							path="/signin"
							element={
								this.props.currentUser ? <HomePage /> : <SignInAndSignUpPage />
							}
						/>

						<Route path="/checkout" element={<Checkout />} />
					</Routes>
				</BrowserRouter>
			</div>
		);
	}
}

const mapDispatchToProps = (dispatch) => ({
	setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

const mapStateToProps = createStructuredSelector({
	currentUser: selectCurrentUser,
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
