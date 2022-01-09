import React from "react";
import "./header.scss";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const Header = () => {
	return (
		<div className="header">
			<Link to="/" className="logo-container">
				<img src={logo} alt="logo" width={150} />
			</Link>

			<div className="options">
				<Link to="/shop" className="option">
					Shop
				</Link>
				<Link to="/shop" className="option">
					Contact
				</Link>
				<Link to="/signin" className="option">
					Sign in
				</Link>
			</div>
		</div>
	);
};

export default Header;
