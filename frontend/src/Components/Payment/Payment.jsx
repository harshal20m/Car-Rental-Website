import React, { useContext } from "react";
import "./Payment.css"; // Import CSS file

import qr_icon from "../Assets/QR.jpg";
import { ShopContext } from "../../Context/ShopContext";

const Payment = ({ discount }) => {
	return (
		<div className="payment-container">
			<img src={qr_icon} className="payment-image" />
			<h1 className="payment-heading">{discount}</h1>
			{console.log(discount)}
		</div>
	);
};

export default Payment;
