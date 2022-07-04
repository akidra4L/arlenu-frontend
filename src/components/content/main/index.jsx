import React from "react";
import tshirt from "../../../assets/shirt.jpg";

export const Main = () => {
  return (
    <div className="main">
      <div className="main-wrapper">
        <div className="main-wrapper-content">
          <img src={tshirt} alt="tshirt" />
        </div>
        <div className="main-wrapper-content">
          <img src={tshirt} alt="tshirt" />
        </div>
        <div className="main-wrapper-content">
          <img src={tshirt} alt="tshirt" />
        </div>
        <div className="main-wrapper-content">
          <img src={tshirt} alt="tshirt" />
        </div>
        <div className="main-wrapper-content">
          <img src={tshirt} alt="tshirt" />
        </div>
        <div className="main-wrapper-content">
          <img src={tshirt} alt="tshirt" />
        </div>
      </div>
    </div>
  );
};
