import React from "react";
import "../Style/About.style.css";
import Security from "../Img/security_SVG 1.svg";
const About = () => {
  return (
    <div className="aContinar ">
      <div className="aFixingSize">
        <div className="ASecurity"> 
          <img src={Security} alt="security_SVG" />
        </div>

        <div className="ATextItems">
          <div className="Aheading ">
            <h1>We are a high-level data storage bank</h1>
          </div>
          <div className=" hParagraph" >
            <p className="">
              The place to store various data that you can access at any time
              through the internet and where you can carry it. This very
              flexible storage area has a high level of security. To enter into
              your own data you must enter the password that you created when
              you registered in this Data Warehouse.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
