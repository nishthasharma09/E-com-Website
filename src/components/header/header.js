import React from "react";
import "./header.scss";
import { auth } from "../../firebase/firebase.utils";
import { connect } from "react-redux"; //component to redux
import CartIcon from "../card-icon/cart-icon";
import CartDropdown from "../cart-dropdown/cart-dropdown";

import { Link } from "react-router-dom";
import { selectCartHidden } from "../../redux/cart/cart.selectors";
import { selectCurrentUser } from "../../redux/user/user.selectors";

const Header = ({ currentUser, hidden }) => {
	return (
		<div className="header">
			<Link to="/" className="logo-container">
				<h3 className="logo">Emilia Clothing</h3>
			</Link>

			<div className="options">
				<Link to="/shop" className="option">
					Shop
				</Link>
				<Link to="/contact" className="option">
					Contact
				</Link>
				<Link to="/checkout" className="option">
					Checkout
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

				<CartIcon />
			</div>
			{hidden && <CartDropdown />}
		</div>
	);
};

const mapStateToProps = (state) => ({
	currentUser: selectCurrentUser(state),
	hidden: selectCartHidden(state),
});

export default connect(mapStateToProps)(Header);
