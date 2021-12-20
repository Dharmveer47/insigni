import React from "react";
import Card from "../Components/Card";
import Dot from "../Img/Dot.svg";
import smallDot from "../Img/Small Dot.svg";
import Warrow from "../Img/White Arrow.svg";
import "../Style/Feature.style.css";

const Fetures = () => {
  return (
    <div className="mt5">
      <div className="fContainer">
        <div className="fHeading">
          <h1>Features</h1>
        </div>
        <div className="fCard">
          <div>
            <Card
              img="https://raw.githubusercontent.com/Dharmveer47/PortfolioImg/3dfe5f5c5b9c2ac651a7e202466e24ae0e2af201/ClipboardText.svg"
              name="Search Data"
              des="Don’t worry if your data is very large, Insignia provides a search engine, which is useful for making it easier to find data effectively saving time."
            />
            <Card
              img="https://raw.githubusercontent.com/Dharmveer47/PortfolioImg/3dfe5f5c5b9c2ac651a7e202466e24ae0e2af201/Printer.svg"
              name="Print Out"
              des="Print out service gives you convenience if someday you need print data, just edit it all and just print it."
            />
            <Card
              img="https://raw.githubusercontent.com/Dharmveer47/PortfolioImg/3dfe5f5c5b9c2ac651a7e202466e24ae0e2af201/ShieldCheck.svg"
              naem="Security Code"
              des="Data Security is one of our best facilities. Allows for your files to be safer. The file can be secured with a code or password that you created, so only you can open the file."
            />
          </div>
        </div>

        <div className="fSmallimg">
          <div>
            <img src={Dot} alt="" />
            <img src={smallDot} alt="" className="mr" />
          </div>
          <div className="">
            <img src={Warrow} alt="" />
            <img src={Warrow} alt="" className="fImgArrow" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Fetures;
