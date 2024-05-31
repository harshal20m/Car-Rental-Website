import React, { useRef, useState, useEffect } from "react";
import Hero from "../Components/Hero/Hero";
import Popular from "../Components/Popular/Popular";
import NewCollections from "../Components/NewCollections/NewCollections";
import NewsLetter from "../Components/NewsLetter/NewsLetter";
import ClipLoader from "react-spinners/ClipLoader"; // Import the loader spinner
import "./CSS/Shop.css";

const Shop = () => {
	const sectionRef = useRef(null);
	const [loading, setLoading] = useState(true);

	const scrollToSection = () => {
		// Scrolls to the top of the section
		sectionRef.current.scrollIntoView({ behavior: "smooth" });
	};

	useEffect(() => {
		// Simulate a loading process
		setTimeout(() => {
			setLoading(false);
		}, 2000); // Adjust the timeout duration as needed
	}, []);

	return (
		<div>
			{loading ? (
				<div className="loader-container">
					<ClipLoader size={50} color={"#123abc"} loading={loading} />
				</div>
			) : (
				<>
					<Hero scrollToSection={scrollToSection} />
					<Popular />
					{/* <Offers /> */}
					<NewCollections sectionRef={sectionRef} />
					<NewsLetter />
				</>
			)}
		</div>
	);
};

export default Shop;
