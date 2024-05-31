import React, { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";
import { useParams } from "react-router-dom";
import Breadcrum from "../Components/Breadcrums/Breadcrum";
import ProductDisplay from "../Components/ProductDisplay/ProductDisplay";
import DescriptionBox from "../Components/DescriptionBox/DescriptionBox";
import RelatedProducts from "../Components/RelatedProducts/RelatedProducts";

const Product = () => {
	const { all_product } = useContext(ShopContext);
	const { productId } = useParams(); //to  get the product id
	const product = all_product.find((e) => e.id === Number(productId));
	const category = ["Sedan", "Suv", "EV"];
	return (
		<div>
			<Breadcrum product={product} />
			<ProductDisplay product={product} />
			<DescriptionBox />
			<RelatedProducts category={category} />
		</div>
	);
};

export default Product;
