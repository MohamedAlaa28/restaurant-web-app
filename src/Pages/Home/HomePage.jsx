import React from "react";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Main from "./components/Main";
import Footer from "./components/Footer";
import About from "./components/About";
import Rate from "./components/Rating";

const HomePage = () => {
  return (
    <div>
      <Nav />
      <Header />
      <Main />
      <Rate />
      <About />
      <Footer />
    </div>
  );
};

export default HomePage;
