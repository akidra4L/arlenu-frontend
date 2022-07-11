import React, { useEffect, useState } from "react";
import FileBase65 from "react-file-base64";

import { createItem } from "../../../functions";

export const Add = () => {
  const [itemToAdd, setItemToAdd] = useState({
    title: "",
    description: "",
    image: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await createItem(itemToAdd);
    alert("Success.");
  }

  return (
    <div className="file">
      <div className="file-wrapper">
        <div className="file-wrapper-add">
          <form action="" className="file-wrapper-add-form" onSubmit={handleSubmit}>
            <input type="text" placeholder="Название" id="title"
              onChange={e => setItemToAdd({ ...itemToAdd, title: e.target.value })}
            />
            <input type="text" placeholder="Описание" id="description"
              onChange={e => setItemToAdd({ ...itemToAdd, description: e.target.value })}
            />
            <FileBase65
              type="file"
              multiple={false}
              onDone={({ base64 }) => setItemToAdd({ ...itemToAdd, image: base64 })}
            />
            <button id="submit-btn">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};
