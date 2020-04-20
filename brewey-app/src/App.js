import React, { Component } from "react";
import BrewerySearch from "./components/BrewerySearch";
import FetschData from "./components/FetschData";
import BeerPerCountry from "./components/BeerPerCounty";
import SearchField from "./components/SearchField";
import Introduction from "./components/Introduction";
import "./App.css";

function App() {
  return (
    <div className="App">
      {/* <FetschData /> */}
      <Introduction />
      <BeerPerCountry />

      <SearchField />
    </div>
  );
}

export default App;
