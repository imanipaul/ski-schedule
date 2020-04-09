import React, { useState, useEffect } from "react";
import DayPicker from "react-day-picker";
import "react-day-picker/lib/style.css";

export default function Example(props) {
  const [allDays, setAllDays] = useState([]);
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
    console.log("selected days ", props.selectedDays);
    !selected &&
      props.setSelectedDays([
        ...props.selectedDays,
        selected ? undefined : day,
      ]);

    const found = props.selectedDays.find(
      (element) => Number(element) == Number(day)
    );
    console.log("found is", found);
    const find = props.selectedDays.indexOf(found);
    console.log("find", props.selectedDays.indexOf(found));

    let holder = props.selectedDays;
    console.log("all days was", holder);
    if (find > -1) {
      holder.splice(find, 1);
      console.log("all days", holder);
      // let newDays = props.selectedDays.splice(find, 1);
      // console.log("newDays", newDays);
      // console.log("new selected days", props.selectedDays);
      // props.setSelectedDays(allDays);
      setAllDays(holder);
    }

    console.log("all days", allDays);

    // console.log("day", day);
    // console.log("day number", Number(day));
  };

  useEffect(() => {
    props.setSelectedDays(allDays);
  }, [allDays]);

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
