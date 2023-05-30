import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home.js";
import Canvas from "./pages/canvas/Canvas.js";

function App() {
  return ( 
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element = {<Home/>} />
        <Route exact path="/Canvas" element = {<Canvas/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
