import React from "react";

import "./checkout-item.scss";

import { clearItemFromCart } from "../../redux/cart/cart.action";
import { useDispatch } from "react-redux";
import { addItemToCart, removeItem } from "../../redux/cart/cart.action";

const CheckoutItem = ({ cartItem }) => {
	const dispatch = useDispatch();
	return (
		<div className="checkout-item">
			<div className="image-container">
				<img src={cartItem.imageUrl} alt="item" />
			</div>
			<span className="name">{cartItem.name}</span>

			<span className="quantity">
				<div className="arrow" onClick={() => dispatch(removeItem(cartItem))}>
					&#10094;
				</div>
				<span className="value">{cartItem.quantity}</span>
				<div
					className="arrow"
					onClick={() => dispatch(addItemToCart(cartItem))}
				>
					&#10095;
				</div>
			</span>

			<span className="price">{cartItem.quantity * cartItem.price}</span>
			<div
				className="remove-button"
				onClick={() => dispatch(clearItemFromCart(cartItem))}
			>
				&#10005;
			</div>
		</div>
	);
};

export default CheckoutItem;
