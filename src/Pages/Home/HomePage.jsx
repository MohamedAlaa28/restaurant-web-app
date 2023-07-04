import React from "react";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Products from "./components/Products";
import Footer from "./components/Footer";
import About from "./components/About";
import Testimonials from "./components/Testimonials";

const HomePage = () => {
  // const [isLoading, setIsLoading] = useState(true);
  // const handlePageLoad = () => {
  //   setIsLoading(false);
  // };

  // useEffect(() => {
  //   handlePageLoad(); // Immediately set isLoading to false on component mount

  //   // Cleanup function to set isLoading to true when the component unmounts
  //   return () => {
  //     setIsLoading(true);
  //   };
  // }, []);

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
