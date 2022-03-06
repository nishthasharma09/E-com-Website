import React from "react";
import CollectionPreview from "../../components/preview-collection/preview-collection";
import { selectCollections } from "../../redux/shop/shop.selectors";
import { useSelector } from "react-redux";

function ShopPage() {
	const collections = useSelector((state) => selectCollections(state));
	return (
		<div className="shop-page">
			{collections.map(({ id, ...otherCollectionProps }) => (
				<CollectionPreview key={id} {...otherCollectionProps} />
			))}
		</div>
	);
}

export default ShopPage;
