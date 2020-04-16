import React, { Component } from "react";
import BrewerySearch from "./components/BrewerySearch";
import FetschData from "./components/FetschData";

import "./App.css";

function App() {
  return (
    <div className="App">
      <FetschData />
      <BrewerySearch />
    </div>
  );
}

export default App;
