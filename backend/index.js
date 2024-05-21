const port = 4000;
const express = require("express");
const dotenv = require("dotenv");

const app = express();
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken"); // generate the token and vewrify the token
//euuuuuuuu
const path = require("path");
const cors = require("cors");
const { default: all_product } = require("./all_product");

app.use(express.json());
app.use(cors());
dotenv.config();

const URI = process.env.mongodb;

//database connection with mongodb
mongoose
	.connect(URI)
	.then(() => {
		console.log("Connected to MongoDB");
	})
	.catch((error) => {
		console.error("Error connecting to MongoDB:", error);
	});

//API Creation
app.get("/", (req, res) => {
	res.send("Express App is Running");
});

//Schema for Creating Products
const Product = mongoose.model("Product", {
	id: {
		type: Number,
		required: true,
	},
	name: {
		type: String,
		required: true,
	},
	price: {
		type: String,
		required: true,
	},
	img: {
		type: String,
		required: true,
	},
	model: {
		type: String,
		required: true,
	},
	mark: {
		type: String,
		required: true,
	},
	year: {
		type: String,
		required: true,
	},
	doors: {
		type: String,
		required: true,
	},
	air: {
		type: String,
		required: true,
	},
	transmission: {
		type: String,
		required: true,
	},
	fuel: {
		type: String,
		required: true,
	},
	category: {
		type: String,
		required: true,
	},
});

app.post("/addproduct", async (req, res) => {
	let products = await Product.find({});
	let id;
	if (products.length > 0) {
		let last_product_array = products.slice(-1);
		let last_product = last_product_array[0];
		id = last_product.id + 1;
	} else {
		id = 1;
	}
	const product = new Product({
		id: id,
		name: req.body.name,
		image: req.body.image,
		category: req.body.category,
		new_price: req.body.new_price,
		old_price: req.body.old_price,
	});
	console.log(product);
	await product.save();
	console.log("Saved");
	res.json({
		success: true,
		name: req.body.name,
	});
});

//Creating API for deleting Products
app.post("/removeproduct", async (req, res) => {
	await Product.findOneAndDelete({ id: req.body.id });
	console.log("removed");
	res.json({
		success: true,
		name: req.body.name,
	});
});

//Creating API for getting all Products
app.get("/allproducts", async (req, res) => {
	let products = await Product.find({});
	console.log("All Products fetched");
	res.send(products);
});

//creating Schema for user model
const Users = mongoose.model("Users", {
	name: {
		type: String,
	},
	email: {
		type: String,
		unique: true,
	},
	password: {
		type: String,
	},
	cartData: {
		type: Object,
	},
	date: {
		type: Date,
		default: Date.now,
	},
});

//creating Endpoint for registering the user
app.post("/signup", async (req, res) => {
	let check = await Users.findOne({ email: req.body.email });
	if (check) {
		return res.status(400).json({ success: false, errors: "existing user found with same email address" });
	}
	let cart = {};
	for (let i = 0; i < 300; i++) {
		cart[i] = 0;
	}
	const user = new Users({
		name: req.body.username,
		email: req.body.email,
		password: req.body.password,
		cartData: cart,
	});

	await user.save();

	const data = {
		user: {
			id: user.id,
		},
	};
	const token = jwt.sign(data, "secret_ecom"); //salt passing here
	res.json({
		success: true,
		token,
	});
});

// creating endpoint for user login
app.post("/login", async (req, res) => {
	let user = await Users.findOne({ email: req.body.email });
	if (user) {
		const passCompare = req.body.password === user.password;
		if (passCompare) {
			//if true will create
			const data = {
				user: {
					id: user.id,
				},
			};
			const token = jwt.sign(data, "secret_ecom");
			res.json({ success: true, token });
		} else {
			res.json({ success: false, errors: "Wrong Password" });
		}
	} else {
		res.json({ sucess: false, errors: "Wrong Email Id" });
	}
});

//creating api for newCollection data
app.get("/newcollections", async (req, res) => {
	let products = await Product.find({});
	let newcollection = products.slice(1).slice(-8);
	console.log("newCollection Fetched");
	res.send(newcollection);
});

//creating endpoint for popular in women section
app.get("/popularinwomen", async (req, res) => {
	let products = await Product.find({ category: "Sedan" });
	let popular_in_Sedan = products.slice(0, 3);
	console.log("popular in Sedan fetched");
	res.send(popular_in_Sedan);
});

//creating middleware to fetch user
const fetchUser = async (req, res, next) => {
	const token = req.header("auth-token");
	if (!token) {
		res.status(401).send({ errors: "Please authenticate using valid token " });
	} else {
		try {
			const data = jwt.verify(token, "secret_ecom");
			req.user = data.user;
			next();
		} catch (error) {
			res.status(401).send({ errors: "please authenticate using a valid token " });
		}
	}
};

//creating endpoints for adding products in cartdata
app.post("/addtocart", fetchUser, async (req, res) => {
	// console.log(req.body, req.user);
	console.log("Added", req.body.itemId);
	let userData = await Users.findOne({ _id: req.user.id });
	userData.cartData[req.body.itemId] += 1;
	await Users.findOneAndUpdate({ _id: req.user.id }, { cartData: userData.cartData });
	res.send("Added");
});

//creating endpoints to remove product from cart data
app.post("/removefromcart", fetchUser, async (req, res) => {
	console.log("removed", req.body.itemId);
	let userData = await Users.findOne({ _id: req.user.id });
	if (userData.cartData[req.body.itemId] > 0) userData.cartData[req.body.itemId] -= 1;
	await Users.findOneAndUpdate({ _id: req.user.id }, { cartData: userData.cartData });
	res.send("Added");
});

//creating endpoint to get cart data
app.post("/getcart", fetchUser, async (req, res) => {
	console.log("GetCart");
	let userData = await Users.findOne({ _id: req.user.id });
	res.json(userData.cartData);
});

app.listen(port, (error) => {
	if (!error) {
		console.log("server running on Port " + port);
	} else {
		console.log("Error:" + error);
	}
});
