import React from "react";
import "../Style/Footer.style.css";
import Arro from "../Img/Arrow 1.svg";
import FB from "../Img/FacebookLogo.svg";
import Insta from "../Img/InstagramLogo.svg";
import Twitter from "../Img/TwitterLogo.svg";
import Abs from "../Img/Abstract Circle 1.png";
const Footer = () => {
  return (
    <div className="FoContainer">
      <div className="FoNav">
        <div className="FoHeading">
          <h1>Try for free!</h1>
          <p>Get limited 1 week free try our features!</p>
        </div>
        <div className="FoButtonArea">
          <button className="FoButton">Learn More</button>

          <div className="FoButton">
            <button>Request Demo</button>
            <img src={Arro} alt="arrow" />
          </div>
        </div>
      </div>

      <div className="FoMain">
        <div className="FoMain01">
          <div className="FoInfo1">
            <div className="FoLogo">
              <img src={Abs} alt="Insignia" />
              <h1>Insignia</h1>
            </div>

            <p>Insignia Society,243</p>
            <p>Bahagia Ave Street PRBW 29281</p>
            <p>infi@insignia.com</p>
            <p>1-232-343 (Main)</p>
          </div>

          <div className="FoInfo02">
            <p>About</p>
            <p>Profile</p>
            <p>Feature</p>
            <p>Careers</p>
            <p>Dw News</p>
          </div>
        </div>

        <div className="FoMain02">
          <div className="FoInfo03">
            <p>Help</p>
            <p>Support</p>
            <p>Sign Up</p>
            <p>Guide</p>
            <p>Reports</p>
            <p>Q&A</p>
          </div>

          <div className="FoSocial">
            <p>Social Media</p>
            <div>
              <img src={FB} alt="FB" />
            </div>
            <div>
              <img src={Twitter} alt="Twitter" />
            </div>
            <div>
              <img src={Insta} alt="Insta" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
