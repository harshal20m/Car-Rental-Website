import React, { useEffect, useState } from "react";
import "./newcollections.css";
// import new_collections from "../Assets/new_collections";
import Item from "../Items/Item";

const NewCollections = ({ sectionRef }) => {
	const [new_collection, setNew_collection] = useState([]);

	useEffect(() => {
		fetch("http://localhost:4000/newcollections")
			.then((response) => response.json())
			.then((data) => setNew_collection(data));
	}, []);

	return (
		<div ref={sectionRef} className="new-collections">
			<h1>
				<i class="bx bxs-hot bx-tada" style={{ color: "orange" }}></i>NEW COLLECTIONS
				<i class="bx bxs-hot bx-tada" style={{ color: "orange" }}></i>
			</h1>
			<hr />
			<div className="collections">
				{new_collection.map((item, i) => {
					return <Item key={i} id={item.id} name={item.name} img={item.img} price={item.price} />;
				})}
			</div>
		</div>
	);
};

export default NewCollections;
