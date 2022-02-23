import React from "react";
import "./cart-icon.scss";
import { ReactComponent as ShoppingIcon } from "../assets/shopping-bag.svg";
import { connect } from "react-redux";
import { toggleCartHidden } from "../../redux/cart/cart.action";
import { useDispatch } from "react-redux";

const CardIcon = () => {
	const dispatch = useDispatch();
	return (
		<div className="cart-icon" onClick={() => dispatch(toggleCartHidden)}>
			<ShoppingIcon className="shopping-icon" />
			<span className="item-count">0</span>
		</div>
	);
};

export default connect(null)(CardIcon);
