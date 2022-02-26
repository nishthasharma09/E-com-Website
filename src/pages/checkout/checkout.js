import React, { useEffect } from "react";
import "./checkout.scss";
import { useDispatch, useSelector } from "react-redux";
import { cartTotal } from "../../redux/cart/cart.action";

const Checkout = () => {
	const HeadingText = ["Product", "Description", "Quantity", "Price", "Remove"];

	return (
		<>
			<p className="checkout-text">Checkout</p>
			<div className="checkout-page">
				<div className="checkout-header">
					{HeadingText.map((heading) => (
						<div className="header-box">
							<span className="header-block">{heading}</span>
						</div>
					))}
				</div>
			</div>
		</>
	);
};

export default Checkout;
