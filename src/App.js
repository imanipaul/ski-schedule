import React, { useState } from "react";
import Calendar from "./Calendar";
import Header from "./Header";
import Stats from "./Stats";
import Notes from "./Notes";
import "./App.scss";

function App() {
  const [selectedDays, setSelectedDays] = useState([]);
  const [selectedType, setSelectedType] = useState("");
  const [skiData, setSkiData] = useState({
    // total: 50 ,
    total: 50,
    powder: 20,
    backcountry: 10,
    goal: 100,
  });

  return (
    <div className="App">
      <Header />
      <div className="content">
        <Stats
          selectedDays={selectedDays}
          setSelectedDays={setSelectedDays}
          selectedType={selectedType}
          setSelectedType={setSelectedType}
          skiData={skiData}
          setSkiData={setSkiData}
        />

        <div className="subcontent">
          <Notes />

          <Calendar
            selectedDays={selectedDays}
            setSelectedDays={setSelectedDays}
            selectedType={selectedType}
            setSelectedType={setSelectedType}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
