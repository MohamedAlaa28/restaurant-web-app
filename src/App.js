import "./App.scss";
import React, { createContext, useState } from "react";
import { BrowserRouter, HashRouter, Route, Routes } from "react-router-dom";
import ConfirmedBooking from "./Pages/Booking/components/ConfirmedBooking";
import LoadingSpinner from "./assets/components/LoadingSpinner";
import NavBar from "./assets/components/NavBar";
import ProductDetailsPage from "./Pages/ProductDetails/ProductDetailsPage";

const HomePage = React.lazy(() => import("./Pages/Home/HomePage"));
const BookingPage = React.lazy(() => import("./Pages/Booking/BookingPage"));

export const BookingContext = createContext();
export const HomeContext = createContext();
export const NavBarContext = createContext();

function App() {
  const [firstName, setFirstName] = useState({ value: "" });
  const [lastName, setLastName] = useState({ value: "" });
  const [date, setDate] = useState({ value: "" });
  const [time, setTime] = useState({ value: "" });
  const [guests, setGuests] = useState({ value: "" });
  const [occasion, setOccasion] = useState({ value: "" });
  const [email, setEmail] = useState({ value: "" });
  const [phoneNumber, setPhoneNumber] = useState({ value: "" });
  const [seating, setSeating] = useState({ value: "" });
  const [accept, setAccept] = useState({ value: "" });
  const [numberOfFromPage, setNumberOfFromPage] = useState(1);


  return (
    <div className="App">
      <HashRouter>
        <NavBar />
        <Routes>
          <Route
            path="/"
            element={
              <React.Suspense fallback={<LoadingSpinner />}>
                <HomePage />
              </React.Suspense>
            }
          />
          <Route
            path="/booking"
            element={
              <React.Suspense fallback={<LoadingSpinner />}>
                <BookingContext.Provider
                  value={{
                    firstName: firstName.value,
                    lastName: lastName.value,
                    date: date.value,
                    time: time.value,
                    guests: guests.value,
                    occasion: occasion.value,
                    seating: seating.value,
                    email: email.value,
                    accept: accept.value,
                    phoneNumber: phoneNumber.value,
                    firstNameValid: firstName.isValid,
                    lastNameValid: lastName.isValid,
                    dateValid: date.isValid,
                    emailValid: email.isValid,
                    phoneNumberValid: phoneNumber.isValid,
                    acceptValid: accept.isValid,
                    firstNameIsTouched: firstName.isTouched,
                    lastNameIsTouched: lastName.isTouched,
                    emailIsTouched: email.isTouched,
                    phoneNumberIsTouched: phoneNumber.isTouched,
                    dateIsTouched: date.isTouched,
                    firstNameError: firstName.error,
                    lastNameError: lastName.error,
                    dateError: date.error,
                    emailError: email.error,
                    phoneNumberError: phoneNumber.error,
                    setFirstName,
                    setLastName,
                    setTime,
                    setGuests,
                    setOccasion,
                    setDate,
                    setSeating,
                    setEmail,
                    setPhoneNumber,
                    setAccept,
                    numberOfFromPage,
                    setNumberOfFromPage,
                  }}
                >
                  <BookingPage />
                </BookingContext.Provider>
              </React.Suspense>
            }
          />

          <Route path="/confirm" element={<ConfirmedBooking />} />
          <Route path="/product/:id" element={<ProductDetailsPage />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
