import React from "react";
import "./footer.css";
import footer_logo from "../Assets/logo-car.png";
import instagram_icon from "../Assets/instagram_icon.png";
import whatsapp_icon from "../Assets/whatsapp_icon.png";
import { Link } from "react-router-dom";

const Footer = () => {
	return (
		<div className="footer">
			<div className="footer-logo">
				<img src={footer_logo} alt="" />
				<h1>
					<span>R</span>
					<span>E</span>
					<span>N</span>
					<span>T</span>
					<span>C</span>
					<span>A</span>
					<span>R</span>
					<span>.</span>
					<span>I</span>
					<span>N</span>
				</h1>
			</div>
			<ul className="footer-links">
				<Link to={`/company`} style={{ textDecoration: "none", color: "black" }}>
					<li>Company</li>
				</Link>
				<Link to={`/`} style={{ textDecoration: "none", color: "black" }}>
					<li>Product</li>
				</Link>
				<Link to={`/about`} style={{ textDecoration: "none", color: "black" }}>
					<li>About</li>
				</Link>
				<Link to={`/contact`} style={{ textDecoration: "none", color: "black" }}>
					<li>Contact</li>
				</Link>
			</ul>
			<div className="footer-social-icons">
				<div className="footer-icons-container">
					<a href="https://www.instagram.com/20harshal" rel="noreferrer" target="_blank">
						<img src={instagram_icon} alt="" />
					</a>
				</div>
				<div className="footer-icons-container">
					<a href="https://wa.me/8669119880" rel="noreferrer" target="_blank">
						<img src={whatsapp_icon} alt="" />
					</a>
				</div>
				<div className="footer-icons-container">
					<a href="https://x.com/20harshalmali" rel="noreferrer" target="_blank">
						<img
							src="https://th.bing.com/th/id/OIP.PjG-Z-6wXH8l-9kLJKLdqgAAAA?w=278&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
							alt=""
							className="twitter"
						/>
					</a>
				</div>
			</div>
			<div className="footer-copyright">
				<hr />
				<p>Copyright @2023 - All Rights Reserved By - Harshal Mali</p>
			</div>
		</div>
	);
};

export default Footer;
