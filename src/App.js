import React from "react";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import './App.css'
import Fetures from "./Pages/Fetures";
import About from "./Pages/About";
const App = () => {
  return (
    <div className="app">
      <Navbar/>     
      <Home/>     
      <About/>     
      <Fetures/>     
    
    </div>
  );
};

export default App;
