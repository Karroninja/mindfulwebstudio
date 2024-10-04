"use strict";

import format from "date-fns/format";
import getDay from "date-fns/getDay";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import React, { useState } from "react";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Calendar localizer={localizer} events={events}
      startAccessor="start" endAccessor="end" style={{height: 500, margin: "50px"}} />
    </div>
  );
}

export default App;