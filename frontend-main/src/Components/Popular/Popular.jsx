import React, { useEffect, useState } from "react";
import "./popular.css";
// import data_products from "../Assets/data";
import Item from "../Items/Item";

const Popular = () => {
	const [popularProducts, setPopularProducts] = useState([]);

	useEffect(() => {
		fetch("https://carrentalbe.onrender.com/popularinwomen")
			.then((response) => response.json())
			.then((data) => setPopularProducts(data));
	}, []); //empty array is using because we want it to run once on page

	return (
		<div className="popular">
			<h1>
				<i class="bx bxs-hot bx-tada" style={{ color: "orange" }}></i>&nbsp;POPULAR IN SEDAN&nbsp;
				<i class="bx bxs-hot bx-tada" style={{ color: "orange" }}></i>
			</h1>
			<hr />
			<div className="popular-item">
				{popularProducts.map((item, i) => {
					return <Item key={i} id={item.id} name={item.name} img={item.img} price={item.price} />;
				})}
			</div>
		</div>
	);
};

export default Popular;
