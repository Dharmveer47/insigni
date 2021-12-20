import React from "react";

import "../Style/Navbar.style.css";
// ------- Menu Icon ---------
import Hamburg from "../Img/hamburger-menu.svg";
import Arro from "../Img/Arrow 1.svg";
import Logo from "../Img/Abstract Circle 1.svg";
const Navbar = () => {
  return (
    <div className="NavMain allCenter">
      <div className="NavLogo allCenter ">
        <div className="NavHeorLogo">
          <img src={Logo} alt="Logo" />
        </div>

        <div className="NavHeading">
          <h2>Insignia</h2>
        </div>
      </div>
      <div className="NavHamMenu">
        <img src={Hamburg} alt="Hamburg" />
      </div>
      <div className="NavLink allCenter">
        <button>About</button>
        <button>Help</button>
        <button>Features</button>
        <button>Signup</button>
        <button className="ButtonStyle">
          Request Demo
          <img src={Arro} alt="ArrowImg" />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
