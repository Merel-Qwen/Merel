import React, { Component } from "react";

import UseData from "./components/UseData";
import BeerPerCountry from "./components/BeerPerCounty";
import SearchField from "./components/SearchField";
import Introduction from "./components/Introduction";
import "./App.css";

function App() {
  return (
    <div className="App">
      {/* <UseData /> */}
      <Introduction />
      <BeerPerCountry />

      <SearchField />
    </div>
  );
}

export default App;
