import "./App.scss";
import React, { createContext, useEffect, useReducer, useState } from "react";
import axios from "axios";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ConfirmedBooking from "./Pages/Booking/components/ConfirmedBooking";
import LoadingSpinner from "./assets/components/LoadingSpinner";
import NavBar from "./assets/components/NavBar";
import { availableTimesReducer } from "./Pages/Booking/reducer/AvailableTimesReducer";
import { initializeTimes } from "./Pages/Booking/BookingPage";
const HomePage = React.lazy(() => import("./Pages/Home/HomePage"));
const BookingPage = React.lazy(() => import("./Pages/Booking/BookingPage"));

export const BookingContext = createContext();
export const HomeContext = createContext();

function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState("");
  const [occasion, setOccasion] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [seating, setSeating] = useState("");
  const [accept, setAccept] = useState("");
  const [availableTimes, dispatch] = useReducer(
    availableTimesReducer,
    initializeTimes()
  );

  const [numberOfFromPage, setNumberOfFromPage] = useState(1);

  const [meals, setMeals] = useState([]);

  useEffect(() => {
    const fetchMeals = async () => {
      try {
        const response = await axios.get(
          "https://www.themealdb.com/api/json/v1/1/search.php?s="
        );
        const data = response.data.meals;
        setMeals(data);
      } catch (error) {
        console.log("Error fetching meals:", error);
      }
    };

    fetchMeals();
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        {/* {console.log(meals)} */}
        <NavBar />
        <Routes>
          <Route
            path="/"
            element={
              <React.Suspense fallback={<LoadingSpinner />}>
                <HomeContext.Provider value={{ meals }}>
                  <HomePage />
                </HomeContext.Provider>
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
                    dispatch,
                    numberOfFromPage,
                    setNumberOfFromPage,
                    availableTimes,
                  }}
                >
                  <BookingPage />
                </BookingContext.Provider>
              </React.Suspense>
            }
          />
          <Route path="/confirm" element={<ConfirmedBooking />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
