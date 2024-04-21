import React from "react";
import "./about.css";

const About = () => {
	return (
		<div className="about-container" to="/about">
			<div className="about-content">
				<h1>About Us</h1>
				<p>
					Welcome to our car rental service! We are dedicated to providing top-quality rental vehicles to our
					customers, ensuring a comfortable and enjoyable driving experience.
				</p>
				<p>
					Our fleet consists of a wide variety of vehicles, including compact cars, sedans, SUVs, trucks, and
					luxury vehicles. Whether you need a reliable car for your daily commute or a spacious SUV for a
					family vacation, we have the perfect vehicle for you.
				</p>
				<p>
					At our car rental company, customer satisfaction is our highest priority. We strive to offer
					competitive prices, convenient rental options, and exceptional customer service. Our team is
					dedicated to assisting you with all your rental needs and ensuring a smooth and hassle-free
					experience from start to finish.
				</p>
				<p>
					Thank you for choosing our car rental service. We look forward to serving you and providing you with
					the perfect vehicle for your transportation needs.
				</p>
			</div>
		</div>
	);
};

export default About;
