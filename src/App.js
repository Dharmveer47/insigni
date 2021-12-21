import React from "react";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import Download from "./Pages/Download";
import Fetures from "./Pages/Fetures";
import About from "./Pages/About";
import Subscribe from "./Components/Subscribe";
import Footer from "./Components/Footer";
import "./App.css";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Home />
      <About />
      <Fetures  Name="Features"/>
      <Download />
      <Fetures  Name="Testimonials" />
      <Subscribe/>
      <Footer/>
    </div>
  );
};

export default App;
