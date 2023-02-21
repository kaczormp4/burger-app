import React, { useState } from "react";
import Menu from "../Menu/Menu";

import mieso from "./../../pic.png/mieso.png";
import mieso1 from "./../../pic.png/mieso1.png";
import ser from "./../../pic.png/ser.png";
import ser1 from "./../../pic.png/ser1.png";
import pomidor from "./../../pic.png/pomidor.png";
import pomidor1 from "./../../pic.png/pomidor1.png";
import kosz from "./../../pic.png/kosz.png";

import "./Ingredient.css";

const Ingredient = ({ type, removeElement, index, addElement }) => {
  const [showPlusButton, setShowPlusButton] = useState(false);
  const [expanded, setExpanded] = useState(false);

  const handleExpand = () => {
    setExpanded(!expanded);
  };

  const handleExpandPlusButton = () => {
    setShowPlusButton(!showPlusButton);
  };

  if (type === "meat") {
    return (
      <div className="meat">
        {showPlusButton && (
          <Menu
            handleExpand={handleExpand}
            expanded={expanded}
            addElement={addElement}
            index={index}
            removeElement={removeElement}
          />
        )}
        <img src={mieso} onClick={handleExpandPlusButton} alt="mieso"></img>
      </div>
    );
  }
  if (type === "cheese") {
    return (
      <div className="cheese">
        {showPlusButton && (
          <Menu
            handleExpand={handleExpand}
            expanded={expanded}
            addElement={addElement}
            index={index}
            removeElement={removeElement}
          />
        )}
        <img src={ser} onClick={handleExpandPlusButton} alt="ser"></img>
      </div>
    );
  }
  if (type === "tomato") {
    return (
      <div className="tomato">
        {showPlusButton && (
          <Menu
            handleExpand={handleExpand}
            expanded={expanded}
            addElement={addElement}
            index={index}
            removeElement={removeElement}
          />
        )}
        <img src={pomidor} onClick={handleExpandPlusButton} alt="pomidor"></img>
      </div>
    );
  }
  return <></>;
};

export default Ingredient;
