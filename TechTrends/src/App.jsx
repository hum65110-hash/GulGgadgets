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
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/wishlist" element={<Wishlist />} />
      </Routes>

      <Footer />
    </>
  );
};

export default App;
