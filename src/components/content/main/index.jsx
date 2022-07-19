import React, { useEffect, useState } from "react";
import { getItems } from "../../../functions";

import Like from "../../../icons/like.js";

export const Main = () => {
  const [items, setItems] = useState([]);

  const [like, setLike] = useState(0);
  const [isLiked, setIsLiked] = useState(false);

  const handleLike = () => {
    if (isLiked) {
      setIsLiked(false);
      setLike(like - 1);
    } else {
      setIsLiked(true);
      setLike(like + 1);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const result = await getItems();
      setItems(result ?? []);
    };
    fetchData();
  }, []);

  return (
    <div className="main">
      <div className="main-wrapper">
        {items.map((item) => (
          <div className="main-wrapper-content" key={item._id}>
            <div className="main-wrapper-content-image">
              <img src={item.image} alt="image" />
            </div>
            <div className="main-wrapper-content-user">
              <div className="main-wrapper-content-user-nickname">
                @{item.nickname}
              </div>
              <div className="main-wrapper-content-user-like">
                {like}
                <button
                  onClick={() => {
                    handleLike(item._id);
                    console.log("clicked", item._id);
                  }}
                >
                  <Like />
                </button>
              </div>
            </div>
            <div className="main-wrapper-content-text">{item.description}</div>
          </div>
        ))}
      </div>
    </div>
  );
};
