import React from "react";
import "./App.css";
import Welcome from "./components/Welcome";
import Game from "./components/Game";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Welcome />
      <Game />
      <Footer />
    </div>
  );
}

export default App;
