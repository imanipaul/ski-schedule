import React, { useState, useEffect } from "react";
import DayPicker from "react-day-picker";
import "react-day-picker/lib/style.css";

export default function Example(props) {
  // const [selectedDays, setSelectedDays] = useState([]);
  const modifiers = {
    thursdays: { daysOfWeek: [4] },
    birthday: new Date(2020, 3, 2),
  };
  const modifiersStyles = {
    birthday: {
      color: "white",
      backgroundColor: "red",
    },
    thursdays: {
      color: "#ffc107",
      backgroundColor: "#fffdee",
    },
    selected: {
      backgroundColor: "#becbf4",
      color: "black",
    },
    today: {
      color: "#fed801",
    },
    outside: {
      color: "white",
    },
    navButtonPrev: {
      color: "#fed801",
    },
  };

  const handleDayClick = (day, { selected }) => {
    props.setSelectedDays([...props.selectedDays, selected ? undefined : day]);
  };

  useEffect(() => {});

  const handleType = (e) => {
    console.log("dropdown value", e.target.value);
    props.setSelectedType(e.target.value);
  };

  return (
    <section className="calendar">
      <div>
        <h3>Calendar</h3>
        <select name="type" onChange={handleType}>
          <option value="">Select Type</option>
          <option value="powder">Powder</option>
          <option value="backcountry">Backcountry</option>
          <option value="total">Total</option>
        </select>
      </div>
      <DayPicker
        //   month={new Date(2020, 3)}
        //   modifiers={modifiers}
        modifiersStyles={modifiersStyles}
        selectedDays={props.selectedDays}
        onDayClick={handleDayClick}
        showOutsideDays
      />
    </section>
  );
}
