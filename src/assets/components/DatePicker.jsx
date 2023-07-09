import React, { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import FromButton from "./FromButton";
import "../css/_DatePicker.scss";
import { updateTimes } from "../../Pages/Booking/components/BookingForm";

const DatePicker = ({ value, setState, dispatch, placeholder, icon }) => {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const weekdays = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];

  const [currentDate, setCurrentDate] = useState(new Date());
  const [isOpen, setIsOpen] = useState(false);

  const handleInputChange = () => {
    setIsOpen(!isOpen);
  };

  const prevMonth = (e) => {
    e.preventDefault();
    const prevDate = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth() - 1,
      1
    );
    setCurrentDate(prevDate);
  };

  const nextMonth = (e) => {
    e.preventDefault();
    const nextDate = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth() + 1,
      1
    );
    setCurrentDate(nextDate);
  };

  const selectDate = (day) => {
    const selectedDate = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      day
    );
    setIsOpen(false);
    updateTimes(dispatch, selectedDate);
    setState({ value: selectedDate });
  };

  const formatDate = (date) => {
    const options = { weekday: "long", month: "long", day: "numeric" };
    return new Intl.DateTimeFormat("en-US", options).format(date);
  };

  const renderCalendar = () => {
    const currentMonth = currentDate.getMonth();
    const currentYear = currentDate.getFullYear();
    const firstDay = new Date(currentYear, currentMonth, 1).getDay();
    const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
    const prevMonthDays = new Date(currentYear, currentMonth, 0).getDate();
    const totalDays = daysInMonth + firstDay;

    const calendarDays = [];

    // Render previous month days
    for (let i = firstDay - 1; i >= 0; i--) {
      const day = prevMonthDays - i;
      calendarDays.push(
        <span key={`prev-${day}`} className="calendar-day prev-month">
          {day}
        </span>
      );
    }

    // Render current month days
    for (let i = 1; i <= daysInMonth; i++) {
      const isSelected =
        value &&
        i === new Date(value).getDate() &&
        currentMonth === new Date(value).getMonth() &&
        currentYear === new Date(value).getFullYear();
      const classNames = `calendar-day ${isSelected ? "selected" : ""}`;
      calendarDays.push(
        <span key={i} className={classNames} onClick={() => selectDate(i)}>
          {i}
        </span>
      );
    }

    // Render next month days
    for (let i = totalDays; i < 42; i++) {
      const day = i - totalDays + 1;
      calendarDays.push(
        <span key={`next-${day}`} className="calendar-day next-month">
          {day}
        </span>
      );
    }

    return calendarDays;
  };

  const renderValue = value ? (
    <>
      {formatDate(value)}
      <IoIosArrowUp className="icon" />
    </>
  ) : (
    <>
      {icon} {placeholder} <IoIosArrowDown className="icon" />
    </>
  );

  return (
    <div className="custom-select">
      <FromButton
        className="date-picker-input"
        value={value ? formatDate(value) : ""}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        onClick={handleInputChange}
        renderValue={renderValue}
      />
      {isOpen && (
        <div className="date-picker-calendar">
          <div className="date-picker-header">
            <span className="current-month-year">{`${
              months[currentDate.getMonth()]
            } ${currentDate.getFullYear()}`}</span>
            <div className="nex-prev-section">
              <button className="prev-month-btn" onClick={prevMonth}>
                <MdKeyboardArrowLeft />
              </button>
              <button className="next-month-btn" onClick={nextMonth}>
                <MdKeyboardArrowRight />
              </button>
            </div>
          </div>
          <div className="weekdays">
            {weekdays.map((weekday) => (
              <span key={weekday}>{weekday}</span>
            ))}
          </div>
          <div className="calendar-days">{renderCalendar()}</div>
        </div>
      )}
    </div>
  );
};

export default DatePicker;
