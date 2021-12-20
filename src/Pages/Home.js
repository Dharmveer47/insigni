import React from "react";
import DatabaseImg from "../Img/Database.svg";
import "../Style/Home.style.css"

const Home = () => {
  return (
    <div className="hContainer allCenter">
      <div className="hSection">
        <div className="hHeading">
          <h1>Save your data storage here.</h1>
        </div>
        <div className="hParagraph">
          <p>
            Insignia is a data storage area that has been tested for security,
            so you can store your data here safely but not be afraid of being
            stolen by others.
          </p>
        </div>
        <div>
            <button className="ButtonStyle">
                Learn More
            </button>
        </div>
      </div>

      <div className="hDataBaseImg">
          <img src={DatabaseImg} alt="Img" />
      </div>
    </div>
  );
};

export default Home;
