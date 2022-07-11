import React, { useEffect, useState } from "react";
import { getItems } from "../../../functions";

import Like from "../../../icons/like.js";
import shirt from "../../../assets/shirt.jpg";

export const Main = () => {
  const [items, setItems] = useState([]);

  const [like, setLike] = useState({
    likes: "",
  });
  const [isLiked, setIsLiked] = useState(false);

  const handleLike = (id) => {
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
      setItems(result);
    };
    fetchData();
  }, []);

  return (
    <div className="main">
      <div className="main-wrapper">
        <div className="main-wrapper-content">
          <div className="main-wrapper-content-image">
            <img src={shirt} alt="image" />
          </div>
          <div className="main-wrapper-content-user">
            <div className="main-wrapper-content-user-nickname">
              @Title
            </div>
            <div className="main-wrapper-content-user-like">
              <button>
                <Like />
              </button>
            </div>
          </div>
          <div className="main-wrapper-content-text">This is description.</div>
        </div>
        {/* {items.map((item) => (
          <div className="main-wrapper-content" key={item._id}>
            <div className="main-wrapper-content-image">
              <img src={item.image} alt="image" />
            </div>
            <div className="main-wrapper-content-user">
              <div className="main-wrapper-content-user-nickname">
                @{item.title}
              </div>
              <div className="main-wrapper-content-user-like">
                {item.likes}
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
        ))} */}
      </div>
    </div>
  );
};
