import React from "react";

import tshirt from "../../../assets/shirt.jpg";

export const Add = () => {
  return (
    <div className="file">
      <div className="file-wrapper">
        <div className="file-wrapper-block">
          <img src={tshirt} alt="tshirt" />
        </div>
        <div className="file-wrapper-add">
          <input type="file" id="add-file" />
        </div>
      </div>
    </div>
  );
};
