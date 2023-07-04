import "./App.scss";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import HomePage from "./Pages/Home/HomePage";
import BookingPage from "./Pages/Booking/BookingPage";
import ConfirmedBooking from "./Pages/Booking/components/ConfirmedBooking";
import LoadingSpinner from "./assets/components/LoadingSpinner";
const HomePage = React.lazy(() => import("./Pages/Home/HomePage"));

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <React.Suspense fallback={<LoadingSpinner/>}>
                <HomePage />
              </React.Suspense>
            }
          />
          <Route path="/booking" element={<BookingPage />} />
          <Route path="/confirm" element={<ConfirmedBooking />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
