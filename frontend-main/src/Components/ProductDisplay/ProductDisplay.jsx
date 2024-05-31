import React, { useContext } from "react";
import "./productdisplay.css";
import star_icon from "../Assets/star_icon.png";
import star_dull_icon from "../Assets/star_dull_icon.png";
import { ShopContext } from "../../Context/ShopContext";

const ProductDisplay = (props) => {
	const { product } = props;
	const { addToCart } = useContext(ShopContext);
	return (
		<div className="productdisplay">
			<div className="productdisplay-left">
				{/* <div className="productdisplay-img-list">
					<img src={product.img} alt="" />
					<img src={product.img} alt="" />
					<img src={product.img} alt="" />
					<img src={product.img} alt="" />
				</div> */}
				<div className="productdisplay-img">
					<img src={product.img} className="productdisplay-main-img" alt="" />
				</div>
			</div>
			<div className="productdisplay-right">
				<h1>{product.name}</h1>

				<div className="productdisplay-right-stars">
					<p>Ratings</p>
					<img src={star_icon} alt="" />
					<img src={star_icon} alt="" />
					<img src={star_icon} alt="" />
					<img src={star_dull_icon} alt="" />
					<p>(122)</p>
				</div>

				<div className="productdisplay-right-description">
					<div className="top-features">Top Features : </div>
					<ul>
						<li>Brand : {product.mark}</li>
						<li>Model : {product.model}</li>
						<li>Year : {product.year}</li>
						<li>Fuel : {product.fuel}</li>
						<li>Transmission : {product.transmission}</li>
						<li>Type : {product.category}</li>
					</ul>
				</div>
				<div className="productdisplay-right-prices">
					<div className="productdisplay-right-price-new">Rs. {product.price}</div>
				</div>
				<button
					onClick={() => {
						addToCart(product.id);
					}}
				>
					Book Now
				</button>
				<p className="productdisplay-right-category">
					<span>Category : </span>
					{product.category}
				</p>
				<p className="productdisplay-right-category">
					<span>Tags : </span>Modern, Latest
				</p>
			</div>
		</div>
	);
};

export default ProductDisplay;
