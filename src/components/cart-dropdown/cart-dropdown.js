import React from "react";
import "./cart-dropdown.scss";
import CartItem from "../cart-item/cart-item";
import CustomButton from "../resusable-components/button/button";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { selectCartItems } from "../../redux/cart/cart.selectors";

const CartDropdown = () => {
	const cartItems = useSelector((state) => selectCartItems(state));

	const navigate = useNavigate();
	return (
		<div className="cart-dropdown">
			{cartItems.length ? (
				<div className="cart-items">
					{cartItems.map((item) => (
						<CartItem key={item.id} item={item} />
					))}
				</div>
			) : (
				<span className="empty-message">Cart is empty</span>
			)}
			<CustomButton onClick={() => navigate("/checkout", { replace: true })}>
				GO TO CHECKOUT
			</CustomButton>
		</div>
	);
};

export default CartDropdown;
