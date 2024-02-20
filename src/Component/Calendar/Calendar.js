import React, { useState } from "react";
import { DatePicker } from "react-rainbow-components";

function Calendar({ onChange }) {
  const [date, setDate] = useState(null);

  const onChangeCalendar = (newDate) => {
    setDate(newDate);
    onChange(newDate);
  };

  return (
    <div>
      <DatePicker
        id="datePicker-1"
        value={date}
        onChange={onChangeCalendar} // Utiliser onChangeCalendar pour mettre à jour la date
        label="Choose a date"
        formatStyle="large"
      />
    </div>
  );
}

export default Calendar;
