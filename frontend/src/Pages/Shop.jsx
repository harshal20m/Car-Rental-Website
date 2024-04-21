import React, { useRef } from "react";
import Hero from "../Components/Hero/Hero";
import Popular from "../Components/Popular/Popular";
import Offers from "../Components/Offers/Offers";
import NewCollections from "../Components/NewCollections/NewCollections";
import NewsLetter from "../Components/NewsLetter/NewsLetter";

const Shop = () => {
	const sectionRef = useRef(null);

	const scrollToSection = () => {
		// Scrolls to the top of the section
		sectionRef.current.scrollIntoView({ behavior: "smooth" });
	};

	return (
		<div>
			<Hero scrollToSection={scrollToSection} />
			<Popular />
			{/* <Offers /> */}
			<NewCollections sectionRef={sectionRef} />
			<NewsLetter />
		</div>
	);
};

export default Shop;
