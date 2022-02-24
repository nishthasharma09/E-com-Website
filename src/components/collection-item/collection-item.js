import React from "react";
import CustomButton from "../resusable-components/button/button";
import "./collection-item.scss";
import { useDispatch } from "react-redux";
import { addItemToCart } from "../../redux/cart/cart.action";

const CollectionItem = ({ item }) => {
	const dispatch = useDispatch();
	return (
		<div className="collection-item">
			<div
				className="image"
				style={{ backgroundImage: `url(${item.imageUrl})` }}
			/>
			<div className="collection-footer">
				<span className="name">{item.name}</span>
				<span className="price">{item.price}</span>
			</div>
			<CustomButton inverted onClick={() => dispatch(addItemToCart(item))}>
				Add to cart
			</CustomButton>
		</div>
	);
};

export default CollectionItem;
