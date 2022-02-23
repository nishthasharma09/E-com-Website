import React from "react";
import "./header.scss";
import { Link } from "react-router-dom";
import { auth } from "../../firebase/firebase.utils";
import { connect } from "react-redux"; //component to redux

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

const mapStateToProps = (state) => ({
	currentUser: state.user.currentUser,
});

export default connect(mapStateToProps)(Header);
