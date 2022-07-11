import React, { useEffect, useState } from "react";
import { getItems } from "../../../functions";

import Like from "../../../icons/like.js";

export const Main = () => {
  const [items, setItems] = useState([]);

  const [like, setLike] = useState({
    likes: 0,
  });
  const [isLiked, setIsLiked] = useState(false);

  function handleLike() {
    if (isLiked) {
      setIsLiked(false);
      setLike(like - 1);
    } else {
      setIsLiked(true);
      setLike(like + 1);
    }
  }

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
                @{item.title}
              </div>
              <div className="main-wrapper-content-user-like">
                {item.likes}
                <button onClick={handleLike}>
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
