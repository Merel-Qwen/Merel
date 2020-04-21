import React, { Component } from "react";
import UseBeers from "./components/UseBeers";
import UseLocations from "./components/UseLocations";

import Introduction from "./components/Introduction";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Introduction />
      <UseLocations />
      <UseBeers />
    </div>
  );
}

export default App;
