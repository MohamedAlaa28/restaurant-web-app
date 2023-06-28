import "./App.scss";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./Pages/Home/HomePage";
import BookingPage from "./Pages/Booking/BookingPage";
import ConfirmedBooking from "./Pages/Booking/components/ConfirmedBooking";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/booking"
            element={
              <BookingPage
              />
            }
          />
          <Route path="/confirm" element={<ConfirmedBooking />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
