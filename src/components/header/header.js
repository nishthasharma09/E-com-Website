import React from "react";
import "./header.scss";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { auth } from "../../firebase/firebase.utils";

const Header = ({ currentUser }) => {
	return (
		<div className="header">
			<Link to="/" className="logo-container">
				<h3 className="logo">Emilia Clothing</h3>
			</Link>

			<div className="options">
				<Link to="/shop" className="option">
					Shop
				</Link>
				<Link to="/shop" className="option">
					Contact
				</Link>

				{currentUser ? (
					<div className="option" onClick={() => auth.signOut()}>
						SIGN OUT
					</div>
				) : (
					<Link to="/signin" className="option">
						SIGN IN
					</Link>
				)}
			</div>
		</div>
	);
};

export default Header;
