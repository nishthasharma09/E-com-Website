import React from "react";
import "./cart-icon.scss";
import { ReactComponent as ShoppingIcon } from "../assets/shopping-bag.svg";
import { connect } from "react-redux";
import { toggleCartHidden } from "../../redux/cart/cart.action";
import { useDispatch, useSelector } from "react-redux";
import { selectCartItemsCount } from "../../redux/cart/cart.selectors";

const CardIcon = () => {
	const dispatch = useDispatch();
	const itemCount = useSelector((state) => selectCartItemsCount(state));

	return (
		<div className="cart-icon" onClick={() => dispatch(toggleCartHidden)}>
			<ShoppingIcon className="shopping-icon" />
			<span className="item-count">{itemCount}</span>
		</div>
	);
};

export default connect(null)(CardIcon);
