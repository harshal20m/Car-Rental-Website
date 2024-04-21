import React from "react";
import "./item.css";
import arrow_icon from "../Assets/arrow.png";

import { Link } from "react-router-dom";

const Item = (props) => {
	return (
		<div className="item">
			<Link to={`/product/${props.id}`} style={{ textDecoration: "none", color: "black" }}>
				<img onClick={window.scrollTo(0, 0)} src={props.img} alt="" /> <p>{props.name}</p>
				<div className="item-prices">
					<div className="item-price-new">
						<div className="price">Rs. {props.price} / Day</div> <div className="btn">Book</div>
					</div>
				</div>
			</Link>
		</div>
	);
};

export default Item;
