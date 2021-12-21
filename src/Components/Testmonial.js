import React from "react";
import '../Style/Testmonial.style.css';
import Circle from '../Img/Circle.svg'
import TestMonilHero from '../Img/TestmonialHero.png';
const Testmonial = () => {
  return (
    <div className="tContainer">
      <div className="tImg">
        <img src={TestMonilHero} alt="" />
      </div>
      <div>
        <div className="tName">
          <h1> Jenny Doe </h1>
        </div>
        <div className="tTitle ">
          <p>UX Designer</p>
          <div>
            <img src={Circle} alt="" />
            <img src={Circle} alt="" />
            <img src={Circle} alt="" />
            <img src={Circle} alt="" />
            <img src={Circle} alt="" />
            
          </div>
        </div>
        <div className="tDescription">
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis
            repellat culpa vero dolor suscipit quas animi minima, non expedita
            similique, illum ipsa autem laudantium fugiat corporis ut beatae.
            Qui voluptates vitae cdipisci iusto!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Testmonial;
