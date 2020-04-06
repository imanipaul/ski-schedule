import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [skiData, setSkiData] = useState({
    total: 50,
    powder: 20,
    backcountry: 10,
    goal: 100,
  });

  const [goalProgress, setGoalProgress] = useState(0);

  const getPercent = (decimal) => {
    return decimal * 100 + "%";
  };

  const calcGoalProgress = (total, goal) => {
    return getPercent(total / goal);
  };

  useEffect(() => {
    setGoalProgress(calcGoalProgress(skiData.total, skiData.goal));
  }, [skiData]);

  return (
    <div className="App">
      <section>
        <h3>Total Days: {skiData.total}</h3>
        <h3>Powder Days: {skiData.powder}</h3>
        <h3>Backcountry Days: {skiData.backcountry}</h3>
        <h3>Goal Progress: {goalProgress}</h3>
      </section>

      <section>
        <h4>Update values</h4>
      </section>
    </div>
  );
}

export default App;
