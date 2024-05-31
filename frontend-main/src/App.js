import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ShopCategory from "./Pages/ShopCategory";
import Shop from "./Pages/Shop";
import Product from "./Pages/Product";
import Cart from "./Pages/Cart";
import LoginSignup from "./Pages/LoginSignup";
import Footer from "./Components/Footer/Footer";
import men_banner from "./Components/Assets/banner-sedan.png";
import women_banner from "./Components/Assets/banner_suv.png";
import kids_banner from "./Components/Assets/banner-ev.png";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Company from "./Components/Company/Company";
import Payment from "./Components/Payment/Payment";

function App() {
	return (
		<div>
			<BrowserRouter>
				<Navbar />
				<Routes>
					<Route path="/" element={<Shop />} />
					<Route path="/Sedan" element={<ShopCategory banner={men_banner} category="Sedan" />} />
					<Route path="/Suv" element={<ShopCategory banner={women_banner} category="Suv" />} />
					<Route path="/EV" element={<ShopCategory banner={kids_banner} category="EV" />} />
					<Route path="/product" element={<Product />}>
						<Route path=":productId" element={<Product />} />
					</Route>
					<Route path="/cart" element={<Cart />} />
					<Route path="/login" element={<LoginSignup />} />\
					<Route path="/company" element={<Company />} />\
					<Route path="/about" element={<About />} />
					<Route path="/contact" element={<Contact />} />
					<Route path="/payment" element={<Payment />} />
				</Routes>
				<Footer />
			</BrowserRouter>
		</div>
	);
}

export default App;
