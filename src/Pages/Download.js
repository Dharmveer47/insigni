import React from "react";
import Phone from "../Img/Phone 2.png";
import "../Style/Download.style.css";

const Download = () => {
  return (
    <div className="dmt5">
      <div className="dContainer ">
        <div className="dHeading">
          <div className="dMainHeading">
            <h1> Download Our App</h1>
          </div>
          <div className="dParagraph mt5">
            <p>
              The place to store various data that you can access at any time
              through the internet and where you can carry it. This very
              flexible storage area has a high level of security. To enter into
              your own data you must enter the password that you created when
              you registered in this Data Warehouse.
            </p>
          </div>
          <div className="dBtm">
            <button className="ButtonStyle">Download</button>
          </div>
        </div>

        <div className="dPhoneImg ">
          <img src={Phone} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Download;
