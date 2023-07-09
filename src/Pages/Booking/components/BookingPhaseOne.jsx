import React, { useContext } from "react";
import "../css/_BookingPhaseOne.scss";
import Button from "../../../assets/components/Button";
import { FormContext } from "../BookingPage";
import { FaGlassCheers } from "react-icons/fa";
import { MdOutlineAlarm } from "react-icons/md";
import { HiOutlineCalendar } from "react-icons/hi";
import { AiOutlineUser } from "react-icons/ai";
import CustomSelect from "../../../assets/components/CustomSelect";
import DatePicker from "../../../assets/components/DatePicker";
import bookingLogo from "../../../assets/images/compressed/dogu-tuncer-COda3_JQoWo-unsplash.jpg";

export const alertNameFunction = (e) => {
  if (e.target.value.trim() === "") {
    return <p>you have to enter your name</p>;
  } else if (/\d/.test(e.target.value)) {
    return <p>the name can't have a number</p>;
  }
};

export const alertGuestsFunction = (e) => {
  if (e.target.value.trim() === "") {
    return <p>you have to enter the number of guests</p>;
  } else if (e.target.value < 1) {
    return <p>we can't reserve for no one</p>;
  } else if (e.target.value > 25) {
    return <p>maximum number is 25</p>;
  }
};

const BookingPhaseOne = () => {
  const data = useContext(FormContext);

  const guestsOptions = [...Array(10)].map((_, index) => `${index + 1} Diner`);
  const occasionOptions = ["Birthday", "Anniversary"];

  const dateOptions = (() => {
    const startDate = new Date();
    const options = [];
    for (let i = 0; i < 7; i++) {
      const currentDate = new Date();
      currentDate.setDate(startDate.getDate() + i);
      options.push(currentDate.toISOString().split("T")[0]);
    }
    return options;
  })();

  return (
    <div className="form-section">
      <img src={bookingLogo} alt="bookingLogo" />
      <div className="from-sub-section">
        <p className="booking-header">Reservations</p>
        <form className="form">
          <div className="form-column">
            <div className="radio-section">
              <label htmlFor="indoor">indoor seating</label>
              <input
                type="radio"
                id="indoor"
                name="fav_language"
                value="indoor"
              />
            </div>

            <div className="input-section custom-date-input">
              <label htmlFor="res-date" className="custom-label input-label">
                Date
              </label>
              <DatePicker
                id="res-date"
                value={data.date}
                setState={data.setDate}
                dispatch={data.dispatch}
                options={dateOptions}
                placeholder="Select Date"
                icon={<HiOutlineCalendar className="icon" />}
              />
              {!data.dateValid && data.dateIsTouched && (
                <p className="error-message">
                  Please enter a future valid date
                </p>
              )}
            </div>

            <div className="input-section">
              <label htmlFor="occasion">Occasion</label>
              <CustomSelect
                id="occasion"
                value={data.occasion}
                setState={data.setOccasion}
                options={occasionOptions}
                placeholder={"Occasion"}
                icon={<FaGlassCheers className="icon" />}
              />
            </div>
          </div>
          <div className="form-column">
            <div className="radio-section">
              <label htmlFor="outdoor">outdoor seating</label>
              <input
                type="radio"
                id="outdoor"
                name="fav_language"
                value="outdoor"
              />
            </div>
            <div className="input-section">
              <label htmlFor="guests">Number of diners</label>
              <CustomSelect
                id="guests"
                value={data.guests}
                setState={data.setGuests}
                options={guestsOptions}
                placeholder={"No. of Diners"}
                icon={<AiOutlineUser className="icon" />}
              />
              {!data.guestsValid && data.guestsIsTouched && data.guestsAlert}
            </div>
            <div className="input-section">
              <label htmlFor="res-time">Time</label>
              <CustomSelect
                id="res-time"
                value={data.time}
                setState={data.setTime}
                options={data.availableTimes}
                placeholder={"Select time"}
                icon={<MdOutlineAlarm className="icon" />}
              />
            </div>
          </div>
        </form>
        <Button
          text={
            <>
              reserve <span> a</span> table
            </>
          }
          onClick={() => data.setNumberOfFromPage(2)}
        />
      </div>
    </div>
  );
};

export default BookingPhaseOne;
