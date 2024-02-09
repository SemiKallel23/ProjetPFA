import React from "react";
import { useDispatch } from "react-redux";
import { DatePicker } from "react-rainbow-components";
import { useState } from "react";



function Calendar() {
  const dispatch = useDispatch();
  const [date, setDate] = useState(null);

  function onChange(date) {
    setDate(date);
  }
  return (
    <div>
      <DatePicker
      id="datePicker-1"
      value={date}
      onChange={onChange}
       label="Choose a date"
      formatStyle="large"
    />
    </div>
  );
}

export default Calendar;
