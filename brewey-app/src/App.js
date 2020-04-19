import React, { Component } from "react";
import BrewerySearch from "./components/BrewerySearch";
import FetschData from "./components/FetschData";
import BeerPerCountry from "./components/BeerPerCounty";

import "./App.css";

function App() {
  return (
    <div className="App">
      {/* <FetschData /> */}
      <BeerPerCountry />
      <BrewerySearch />
    </div>
  );
}

export default App;
