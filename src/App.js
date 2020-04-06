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
    const val = (decimal * 100).toFixed(2);
    return val + "%";
  };

  const calcGoalProgress = (total, goal) => {
    return getPercent(total / goal);
  };

  const handleChange = (e) => {
    setSkiData({
      ...skiData,
      [e.target.name]: e.target.value,
    });
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
        <label>Total Days:</label>
        <input
          type="number"
          id="total"
          name="total"
          value={skiData.total}
          onChange={handleChange}
        ></input>
        <label>Powder Days:</label>
        <input
          type="number"
          id="powder"
          name="powder"
          value={skiData.powder}
          onChange={handleChange}
        ></input>
        <label>Backcountry Days:</label>
        <input
          type="number"
          id="backcountry"
          name="backcountry"
          value={skiData.backcountry}
          onChange={handleChange}
        ></input>
        <label>Goal:</label>
        <input
          type="number"
          id="goal"
          name="goal"
          value={skiData.goal}
          onChange={handleChange}
        ></input>
      </section>
    </div>
  );
}

export default App;
