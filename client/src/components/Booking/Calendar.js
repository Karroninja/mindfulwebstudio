"use strict";

import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { registerLocale, setDefaultLocale } from  "react-datepicker";
import { sv } from 'date-fns/locale/sv';
registerLocale('sv', sv);

export function CalendarDiv({ onDateChange, onTimeChange }) {
  const [startDate, setStartDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);

  // Denna lista ska uppdateras med tillgängliga tider från servern, tex om en tid är upptagen ska den inte kunna väljas.
  const availableTimes = [
    "8:00", "9:00", "10:00", "11:00"
  ];

  // När användaren väljer ett datum
  const handleDateChange = function(date) {
    setStartDate(date);
    return onDateChange(date); // Skickar datumet till den överordnade komponenten
  }

  // När användaren väljer en tid
  const handleTimeChange = function(e) {
    const time = e.target.value;
    setSelectedTime(time);
    return onTimeChange(time); // Skickar tiden till den överordnade komponenten
  };

  return (
    <div>
      {/* Datepicker för att välja datum */}
      <DatePicker
        selected={startDate}
        onChange={handleDateChange}
        locale="sv"
        dateFormat="yyyy-MM-dd"
        placeholderText="Välj ett datum"
      />
      {/* Dropdown för tillgängliga tider */}
      {startDate && (
        <div>
          <label htmlFor="timeSelect">Välj en tid:</label>
          <select id="timeSelect" onChange={handleTimeChange}>
            <option value="">Välj tid</option>
            {availableTimes.map((time, index) => (
              <option key={index} value={time}>
                {time}
              </option>
            ))}
          </select>
        </div>
      )}
    </div>
  );
}