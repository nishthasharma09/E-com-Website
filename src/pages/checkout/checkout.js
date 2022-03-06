import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import CheckoutItem from "../checkout/checkout-item";

import {
	selectCartItems,
	selectCartTotal,
} from "../../redux/cart/cart.selectors";

import "./checkout.scss";
const headerData = ["Product", "Description", "Quantity", "Price", "Remove"];

const CheckoutPage = ({ cartItems, total }) => {
	return (
		<div className="checkout-page">
			<div className="checkout-header">
				{headerData.map((head) => {
					return (
						<div className="header-block">
							<span>{head}</span>
						</div>
					);
				})}
			</div>
			{cartItems.map((cartItem) => (
				<CheckoutItem key={cartItem.id} cartItem={cartItem} />
			))}
			<div className="total">Total: ${total}</div>
		</div>
	);
};

const mapStateToProps = createStructuredSelector({
	cartItems: selectCartItems,
	total: selectCartTotal,
});

export default connect(mapStateToProps)(CheckoutPage);
