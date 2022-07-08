import React, { useEffect, useState } from "react";
import axios from "axios";

import URL from "../../../config/url";
import tshirt from "../../../assets/shirt.jpg";

export const Main = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios.get(URL).then((response) => {
      setItems(response.data);
    });
  }, []);

  return (
    <div className="main">
      <div className="main-wrapper">
        {items.map((item) => (
          <div className="main-wrapper-content">
            <img src={tshirt} alt="tshirt" />
            <div className="main-wrapper-content-user">
              <div className="main-wrapper-content-user-nickname">
                @{item.nickname}
              </div>
              <div className="main-wrapper-content-user-title">
                {item.title}
              </div>
            </div>
            <div className="main-wrapper-content-text">
              {item.description}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
