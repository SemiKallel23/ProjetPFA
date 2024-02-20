import React, { useState } from "react";
import { DatePicker } from "react-rainbow-components";

function Calendar({ onChange }) {
  const [date, setDate] = useState(new Date()); 
  
  const onChangeCalendar = (newDate) => {
    setDate(newDate);
    onChange(newDate);
  };

  return (
    <div>
      <DatePicker
        id="datePicker-1"
        value={date}
        onChange={onChangeCalendar}
        label="Choose a date"
        formatStyle="large"
      />
    </div>
  );
}

export default Calendar;
