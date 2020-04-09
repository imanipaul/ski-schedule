import React, { useState } from "react";
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
    // outside: {
    //   // backgroundColor: 'white',
    // },
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

  return (
    <section className="calendar">
      <h3>Calendar</h3>
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
