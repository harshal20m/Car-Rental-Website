import React from "react";
import "./hero.css";
import hand_icon from "../Assets/hand_icon.png";
import arrow_icon from "../Assets/arrow.png";
import hero_image from "../Assets/hero-imagess.png";

const Hero = ({ scrollToSection }) => {
	return (
		<div className="hero">
			<div className="hero-left">
				<h2>Amazing Deals On</h2>
				<div>
					<div className="hero-hand-icon">
						<p>New</p>
						<img src={hand_icon} alt="" />
					</div>
					<p>Popular Cars</p>
					<p>of your Choice </p>
				</div>
				<div className="hero-latest-btn">
					<div onClick={scrollToSection}>Book Latest Cars</div>
					<img src={arrow_icon} alt="" />
				</div>
			</div>
			<div className="hero-right">
				<img src={hero_image} alt="" />
			</div>
		</div>
	);
};

export default Hero;
