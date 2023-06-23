import React from "react";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Products from "./components/Products";
import Footer from "./components/Footer";
import About from "./components/About";
import Testimonials from "./components/Testimonials";

const HomePage = () => {
  return (
    <div>
      <Nav />
      <Header />
      <Products />
      <Testimonials />
      <About />
      <Footer />
    </div>
  );
};

export default HomePage;
