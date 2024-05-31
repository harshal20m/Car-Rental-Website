import React, { useContext } from "react";
import "./relatedproducts.css";

import Item from "../Items/Item";
import { ShopContext } from "../../Context/ShopContext";

const RelatedProducts = (props) => {
	const { all_product } = useContext(ShopContext);
	const matchedProducts = all_product.filter((item) => props.category.includes(item.category));
	return (
		<div className="relatedproducts">
			<h1>Products You Might Like</h1>
			<hr />
			<div className="relatedproducts-item">
				{matchedProducts.map((item, i) => (
					<Item key={i} id={item.id} name={item.name} img={item.img} price={item.price} />
				))}
			</div>
		</div>
	);
};

export default RelatedProducts;
