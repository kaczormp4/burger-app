import React, { useState } from "react";
import Menu from "../Menu/Menu";

import mieso from "./../../assets/images/mieso.png";
import ser from "./../../assets/images/ser.png";
import pomidor from "./../../assets/images/pomidor.png";

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
