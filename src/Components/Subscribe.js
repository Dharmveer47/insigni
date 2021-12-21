import React from "react";
import "../Style/Subscribe.style.css";
const Subscribe = () => {
  return (
    <>
      <div className="SuContainer">
        <div className="SuContent">
          <h1>Subscribe</h1>
          <p>Join our newsletter to never miss any latest news.</p>
        </div>
        <div className="SuInputFild">
          <input type="email" placeholder="Enter your e-mail address here" />
          <button>Join Us</button>
        </div>
      </div>
      <hr />
    </>
  );
};

export default Subscribe;
