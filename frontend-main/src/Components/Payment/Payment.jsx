import React from "react";
import { useLocation } from "react-router-dom";
import "./Payment.css"; // Import CSS file
import qr_icon from "../Assets/QR.jpg";

const Payment = () => {
	const location = useLocation();
	const { totalAmount, discountedTotal } = location.state;

	const displayAmount = discountedTotal !== null ? discountedTotal : totalAmount;

	return (
		<div className="payment-container">
			<img src={qr_icon} className="payment-image" alt="QR Code" />
			<h1 className="payment-heading">Total Amount : Rs. {displayAmount}</h1>
		</div>
	);
};

export default Payment;
