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

export const clearItemFromCart = (item) => ({
	type: CartActionTypes.CLEAR_ITEM_FROM_CART,
	payload: item,
});

export const removeItem = (item) => ({
	type: CartActionTypes.REMOVE_ITEM,
	payload: item,
});
