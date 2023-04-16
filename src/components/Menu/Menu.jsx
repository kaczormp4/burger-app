import React from "react";

import mieso1 from "./../../pic.png/mieso1.png";
import ser1 from "./../../pic.png/ser1.png";
import pomidor1 from "./../../pic.png/pomidor1.png";
import kosz from "./../../pic.png/kosz.png";

const Menu = ({ handleExpand, expanded, addElement, index, removeElement }) => {
  return (
    <div>
      <button className="plusButton" onClick={handleExpand}>
        CLICK!
      </button>
      {expanded && (
        <div className="smallIngr">
          <button className="small" onClick={() => addElement(index, "meat")}>
            <img src={mieso1} alt="mieso"></img>
          </button>
          <button className="small" onClick={() => addElement(index, "tomato")}>
            <img src={pomidor1} alt="pomidor"></img>
          </button>
          <button className="small" onClick={() => addElement(index, "cheese")}>
            <img src={ser1} alt="ser"></img>
          </button>
          <button className="small" onClick={() => removeElement(index)}>
            <img src={kosz} alt="kosz"></img>
          </button>
        </div>
      )}
    </div>
  );
};

export default Menu;
