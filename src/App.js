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
      <Stats />
      
      <Calendar />
      <Notes />
      
    </div>
  );
}

export default App;
