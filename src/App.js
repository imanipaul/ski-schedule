import React, { useState, useEffect } from "react";
import Calendar from './Calendar';
import Header from './Header';
import Stats from './Stats';
import Notes from './Notes';
import "./App.scss";

function App() {
 

  return (
    <div className="App">
      <Header />
      <div className = 'content'>

      <Stats />

      <div className = 'subcontent'>

      <Notes />
      
      <Calendar />
      </div>
      </div>
      
    </div>
  );
}

export default App;
