import CartActionTypes from "./cart.type";

export const toggleCartHidden = {
	type: CartActionTypes.TOGGLE_CART_HIDDEN,
};

export const cartTotal = (total) => ({
	type: "CART_TOTAL",
	payload: total,
});

export const addItemToCart = (item) => ({
	type: CartActionTypes.ADD_ITEM_TO_CART,
	payload: item,
});
