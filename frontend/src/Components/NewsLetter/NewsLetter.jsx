// import React from "react";
// import "./newsletter.css";

// const NewsLetter = () => {
// 	return (
// 		<div className="newsletter">
// 			<h1>Get Exclusive Offers On Your Email</h1>
// 			<p>Subscribe to our newsletter and stay updated</p>
// 			<div>
// 				<input type="email" name="" id="" placeholder="Your Email id" />
// 				<button>Subscribe</button>
// 			</div>
// 		</div>
// 	);
// };

// export default NewsLetter;

//2nd attempt
// import React, { useState } from "react";
// import "./newsletter.css";

// const NewsLetter = () => {
// 	const [subscribed, setSubscribed] = useState(false);

// 	const handleSubscribe = () => {
// 		// Perform subscription logic here (e.g., send request to server)
// 		// For this example, I'm just setting subscribed to true immediately
// 		setSubscribed(true);
// 	};

// 	return (
// 		<div className="newsletter">
// 			<h1>Get Exclusive Offers On Your Email</h1>
// 			<p>Subscribe to our newsletter and stay updated</p>
// 			<div>
// 				<input type="email" name="" id="" placeholder="Your Email id" />
// 				<button onClick={handleSubscribe}>Subscribe</button>
// 			</div>
// 			{subscribed && <p>You are now subscribed!</p>}
// 		</div>
// 	);
// };

// export default NewsLetter;

import React, { useState } from "react";
import "./newsletter.css";

const NewsLetter = () => {
	const [email, setEmail] = useState("");
	const [subscribed, setSubscribed] = useState(false);

	const handleInputChange = (e) => {
		setEmail(e.target.value);
	};

	const handleSubscribe = () => {
		// Perform subscription logic here (e.g., send request to server)
		// For this example, I'm just setting subscribed to true immediately
		setSubscribed(true);
	};

	return (
		<div className="newsletter">
			<h1>Get Exclusive Offers On Your Email</h1>
			<p>Subscribe to our newsletter and stay updated</p>
			<div>
				<input type="email" value={email} onChange={handleInputChange} placeholder="Your Email id" />
				<button onClick={handleSubscribe} disabled={!email}>
					Subscribe
				</button>
			</div>
			{subscribed && <p>You are now subscribed!</p>}
		</div>
	);
};

export default NewsLetter;
