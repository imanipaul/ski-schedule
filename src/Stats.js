import React, {useState, useEffect} from 'react'

import "./App.scss";

export default function Stats() {
    const [skiData, setSkiData] = useState({
        total: 50,
        powder: 20,
        backcountry: 10,
        goal: 100,
      });
    
      const [goalProgress, setGoalProgress] = useState(0);
      const [other, setOther] = useState(0);
    
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
          [e.target.name]: parseInt(e.target.value),
        });
      };
    
      useEffect(() => {
        setGoalProgress(calcGoalProgress(skiData.total, skiData.goal));
        let extraDays = skiData.total - (skiData.powder + skiData.backcountry)
        console.log('total', skiData.total)
        console.log('powder', skiData.powder)
        console.log('backcountry', skiData.backcountry)
        console.log('extra days', extraDays)

        setOther(skiData.total - (skiData.powder + skiData.backcountry));
      }, [skiData]);

      return (
          <section className = 'stats'>
        <h2>Ski Data</h2>

        <table>
          <thead>
            <tr>
            <th>Type</th>
            <th>Value</th>

            </tr>
          </thead>
          <tbody>

          <tr>
            <td>Powder</td>
            <td>{skiData.powder}</td>
          </tr>
          <tr>
            <td>Backcountry</td>
            <td>{skiData.backcountry}</td>
          </tr>
          <tr>
            <td>Other</td>
            <td>{other}</td>
          </tr>
          </tbody>
          <tfoot>
            <tr>

            <td>Total</td>
            <td>{skiData.total}</td>
            </tr>
          </tfoot>
        </table>
          <h3>Goal Progress: {goalProgress}</h3>

        {/* <div>
          <h3>Total Days: {skiData.total}</h3>
          <h3>Powder Days: {skiData.powder}</h3>
          <h3>Backcountry Days: {skiData.backcountry}</h3>
        </div> */}
  
          <h4>Update values</h4>
        <div className="update">
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
        </div>
        </section>
      )
}