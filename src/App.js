import React, { useState, useEffect } from "react";
import Calendar from './Calendar';
import "./App.scss";

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
      <h2>Ski Data</h2>
      <section>
        <h3>Total Days: {skiData.total}</h3>
        <h3>Powder Days: {skiData.powder}</h3>
        <h3>Backcountry Days: {skiData.backcountry}</h3>
        <h3>Goal Progress: {goalProgress}</h3>
      </section>

      <section className="update">
        <h4>Update values</h4>
        <div className="data-values">
          <div>
            <label>Total Days:</label>
            <input
              type="number"
              id="total"
              name="total"
              value={skiData.total}
              onChange={handleChange}
            ></input>
          </div>

          <div>
            <label>Powder Days:</label>
            <input
              type="number"
              id="powder"
              name="powder"
              value={skiData.powder}
              onChange={handleChange}
            ></input>
          </div>

          <div>
            <label>Backcountry Days:</label>
            <input
              type="number"
              id="backcountry"
              name="backcountry"
              value={skiData.backcountry}
              onChange={handleChange}
            ></input>
          </div>

          <div>
            <label>Goal:</label>
            <input
              type="number"
              id="goal"
              name="goal"
              value={skiData.goal}
              onChange={handleChange}
            ></input>
          </div>
        </div>
      </section>
      <Calendar />
    </div>
  );
}

export default App;
