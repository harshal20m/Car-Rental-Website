// import React, { useContext } from "react";
// import "./cartitems.css";
// import { ShopContext } from "../../Context/ShopContext";
// import remove_icon from "../Assets/cart_cross_icon.png";

// const CartItems = () => {
// 	const { getTotalCartAmount, all_product, cartItems, removeFromCart } = useContext(ShopContext);

// 	return (
// 		<div className="cartitems">
// 			<div className="cartitems-format-main">
// 				<p>Products</p>
// 				<p>Title</p>
// 				<p>Price</p>
// 				<p>Quantity</p>
// 				<p>Total</p>
// 				<p>Remove</p>
// 			</div>
// 			<hr />
// 			{all_product.map((e) => {
// 				if (cartItems[e.id] > 0) {
// 					return (
// 						<div key={e.id}>
// 							<div className="cartitems-format cartitems-format-main ">
// 								<img src={e.img} alt="" className="carticon-product-icon" />
// 								<p>{e.name}</p>
// 								<p>Rs. {e.price}</p>
// 								<button className="cartitems-quantity">{cartItems[e.id]}</button>
// 								<p>Rs. {e.price * cartItems[e.id]}</p>
// 								<img
// 									className="cartitems-remove-icon"
// 									src={remove_icon}
// 									onClick={() => {
// 										removeFromCart(e.id);
// 									}}
// 									alt=""
// 								/>
// 							</div>
// 							<hr />
// 						</div>
// 					);
// 				}
// 				return null;
// 			})}
// 			<div className="cartitems-down">
// 				<div className="cartitems-total">
// 					<h1>Cart Totals</h1>
// 					<div>
// 						<div className="cartitems-total-item">
// 							<p>Subtotal</p>
// 							<p>Rs. {getTotalCartAmount()}</p>
// 						</div>
// 						<hr />
// 						<div className="cartitems-total-item">
// 							<p>Shipping Fee</p>
// 							<p>Free</p>
// 						</div>
// 						<hr />
// 						<div className="cartitems-total-item">
// 							<h3>Total</h3>
// 							<h3>Rs. {getTotalCartAmount()}</h3>
// 						</div>
// 					</div>
// 					<button>PROCCED TO CHECKOUT</button>
// 				</div>
// 				<div className="cartitems-promocode">
// 					<p>If you have a promo code , Enter it here </p>
// 					<div className="cartitems-promobox">
// 						<input type="text " placeholder="promo code" />
// 						<button>Submit </button>
// 					</div>
// 				</div>
// 			</div>
// 		</div>
// 	);
// };
// export default CartItems;

import React, { useContext, useState } from "react";
import "./cartitems.css";
import { ShopContext } from "../../Context/ShopContext";
import remove_icon from "../Assets/cart_cross_icon.png";
import { Link } from "react-router-dom";
import Payment from "../Payment/Payment";

const CartItems = () => {
	const { getTotalCartAmount, all_product, cartItems, removeFromCart } = useContext(ShopContext);
	const [promoCode, setPromoCode] = useState("");
	const [discountedTotal, setDiscountedTotal] = useState(null);

	// Function to apply promo code and calculate discounted total
	const applyPromoCode = () => {
		const promoDiscounts = {
			PROMO1: 0.1, // 10% discount for PROMO1
			PROMO2: 0.2, // 20% discount for PROMO2
			PROMO3: 0.3, // 30% discount for PROMO3
		};

		if (promoDiscounts.hasOwnProperty(promoCode)) {
			const discountPercentage = promoDiscounts[promoCode];
			const totalAmount = getTotalCartAmount();
			const discount = totalAmount * discountPercentage;
			const discountedTotal = totalAmount - discount;
			setDiscountedTotal(discountedTotal);
		} else {
			setDiscountedTotal(null); // Reset discounted total if promo code is invalid
		}
	};

	return (
		<div className="cartitems">
			<div className="cartitems-format-main">
				<p>Products</p>
				<p>Title</p>
				<p>Price</p>
				<p>Quantity</p>
				<p>Total</p>
				<p>Remove</p>
			</div>
			<hr />
			{all_product.map((e) => {
				if (cartItems[e.id] > 0) {
					return (
						<div key={e.id}>
							<div className="cartitems-format cartitems-format-main ">
								<img src={e.img} alt="" className="carticon-product-icon" />
								<p>{e.name}</p>
								<p>Rs. {e.price}</p>
								<button className="cartitems-quantity">{cartItems[e.id]}</button>
								<p>Rs. {e.price * cartItems[e.id]}</p>
								<img
									className="cartitems-remove-icon"
									src={remove_icon}
									onClick={() => {
										removeFromCart(e.id);
									}}
									alt=""
								/>
							</div>
							<hr />
						</div>
					);
				}
				return null;
			})}
			<div className="cartitems-down">
				<div className="cartitems-total">
					<h1>Cart Totals</h1>
					<div>
						<div className="cartitems-total-item">
							<p>Subtotal</p>
							<p>Rs. {getTotalCartAmount()}</p>
						</div>
						<hr />
						<div className="cartitems-total-item">
							<p>Shipping Fee</p>
							<p>Free</p>
						</div>
						<hr />

						{!discountedTotal ? (
							<div className="cartitems-total-item">
								<h3>Total</h3>
								<h3>Rs. {getTotalCartAmount()}</h3>
							</div>
						) : (
							<div className="cartitems-discounted-total">
								<p>
									Discount Applied! <br />
									<h1>
										Your Total : <br />
										Rs. {discountedTotal}
									</h1>
								</p>
							</div>
						)}
					</div>
					<Link to={`/payment`} style={{ textDecoration: "none", color: "black" }}>
						<button>PROCEED TO CHECKOUT</button>
					</Link>
					<div className="paymentt">
						{" "}
						{<Payment discount={discountedTotal} />}
						{console.log(discountedTotal)}
					</div>
				</div>
				<div className="cartitems-promocode">
					<p>If you have a promo code, Enter it here </p>
					<div className="cartitems-promobox">
						<input
							type="text"
							placeholder="promo code"
							value={promoCode}
							onChange={(e) => setPromoCode(e.target.value)}
						/>
						<button onClick={applyPromoCode}>Submit</button>
					</div>
				</div>
				{/* Display discounted total if applicable */}
			</div>
		</div>
	);
};
export default CartItems;
