import React, { useState } from "react";
import Calendar from "./Calendar";
import Header from "./Header";
import Stats from "./Stats";
import Notes from "./Notes";
import "./App.scss";

function App() {
  const [selectedDays, setSelectedDays] = useState([]);

  return (
    <div className="App">
      <Header />
      <div className="content">
        <Stats selectedDays={selectedDays} setSelectedDays={setSelectedDays} />

        <div className="subcontent">
          <Notes />

          <Calendar
            selectedDays={selectedDays}
            setSelectedDays={setSelectedDays}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
