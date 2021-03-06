import React from "react";

import Routes from "./routes";
import { Navbar } from "./components";

import "./App.scss";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes />
    </div>
  );
}

export default App;
