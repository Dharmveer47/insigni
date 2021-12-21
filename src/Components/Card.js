import React from "react";
import Arrow from "../Img/Arrow 1.svg";

import "../Style/Card.style.css";
const Card = (props) => {
  return (
    <div className="cContainer">
      <div className="cClipBord">
        <img src={props.img} alt="ClipboardText" />
      </div>
      <div className="cTextItems">
        <h1>{props.name}</h1>
        <p>
          {props.des}
        </p>
      </div>
      <div className="cbtn ">
          <p>Learn More</p>
            <img src={Arrow} alt="" />
      </div>
    </div>
  );
};

export default Card;
