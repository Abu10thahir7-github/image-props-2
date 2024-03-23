import React from "react";
import "./main.css";
function main({ img1, img2, img3 }) {
  return (
    <div className="content">
      <div className="img1  box">
        <div className="text text-1 ">
          <h1>The Seasons Latest </h1>
          <p>Get the seasons all latest desgins in a flick of your hand </p>
          <button>Show More </button>
        </div>
        <img src={img1} alt="" />
      </div>

      <div className="img2 box">
        <div className="text text-2">
          <h1>Our New Designs </h1>
          <p>Get the designs developed by our in house team all for yourself </p>
          <button>Show More </button>
        </div>
        <img src={img2} alt="" />
      </div>

      <div className="img3 box">
        <div className="text text-3">
          <h1>Insiders </h1>
          <p>Get the top class products for yourself with an extra off</p>
          <button>Show More </button>
        </div>
        <img src={img3} alt="" />
      </div>
    </div>
  );
}

export default main;
