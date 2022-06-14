import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Slugreddit from "./components/Slugreddit/Slugreddit";

function App() {
  return (
    <div className="App">
      <header className="App-header"></header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/slug/:slug" element={<Slugreddit />} />
      </Routes>
    </div>
  );
}

export default App;
