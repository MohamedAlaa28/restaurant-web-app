import "./App.css";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./Pages/Home/HomePage";
import BookingPage from "./Pages/Booking/BookingPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/booking"
            element={
              <section>
                <BookingPage />
              </section>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
