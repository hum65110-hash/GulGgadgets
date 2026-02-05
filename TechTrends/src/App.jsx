import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./Pages/Home";
import About from "./Pages/About";
import Cart from "./Pages/Cart";
import Categories from "./Pages/Categories";
import Checkout from "./Pages/Checkout";
import Laptops from "./Pages/Laptops";
import ProductDetails from "./Pages/ProductDetails";
import Wishlist from "./Pages/Wishlist";
import Smartphones from "./Pages/Smartphones";
import Wearables from "./Pages/Wearables";
import SmartHome from "./Pages/SmartHome";
import Gaming from "./Pages/Gaming";
import Tablets from "./Pages/Tablets";
import Cameras from "./Pages/Cameras";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/laptops" element={<Laptops />} />
        <Route path="/smartphones" element={<Smartphones />} />
        <Route path="/wearables" element={<Wearables />} />
        <Route path="/smart-home" element={<SmartHome />} />
<Route path="/gaming" element={<Gaming />} />
<Route path="/tablets" element={<Tablets />} />
<Route path="/cameras" element={<Cameras />} />

        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="*" element={<h1 className="text-center text-2xl py-20">Page Not Found</h1>} />
      </Routes>

      <Footer />
    </>
  );
};

export default App;
