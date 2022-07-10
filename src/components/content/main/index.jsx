import React, { useEffect, useState } from "react";
import { getItems } from "../../../functions";

import tshirt from "../../../assets/shirt.jpg";

export const Main = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await getItems();
      setItems(result);
    };
    fetchData();
  }, []);

  return (
    <div className="main">
      <div className="main-wrapper">
        {items.map((item) => (
          <div className="main-wrapper-content">
            <div className="main-wrapper-content-image">
              <img src={item.image} alt="image" />
            </div>
            <div className="main-wrapper-content-user">
              <div className="main-wrapper-content-user-nickname">
                @{item.nickname}
              </div>
              <div className="main-wrapper-content-user-title">
                {item.title}
              </div>
            </div>
            <div className="main-wrapper-content-text">{item.description}</div>
          </div>
        ))}
      </div>
    </div>
  );
};
