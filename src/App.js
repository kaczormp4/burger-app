import React, { useState } from "react";

import Button from "./components/Button/Button";
import Ingredient from "./components/Ingredient/Ingredient";
import bulkaTop from "./assets/images/bulka-top.png";
import bulkaBottom from "./assets/images/bulka-bottom.png";
import talerz from "./assets/images/talerz.png";

import "./App.css";

function App() {
  const [ingr, setIngr] = useState([""]);

  const INGR = {
    MEAT: "meat",
    CHEESE: "cheese",
    TOMATO: "tomato",
  };

  const removeElement = (index) => {
    const element = ingr.filter((_, i) => i !== index);
    setIngr(element);
  };

  const addElement = (index, type) => {
    const newArr1 = [...ingr];
    newArr1.splice(index, 0, type);
    setIngr(newArr1);
  };

  return (
    <div className="App">
      <div className="buttons-group">
        <Button ingr={ingr} setIngr={setIngr} ingrType={INGR.MEAT}>
          Add meat
        </Button>
        <Button ingr={ingr} setIngr={setIngr} ingrType={INGR.CHEESE}>
          Add cheese
        </Button>
        <Button ingr={ingr} setIngr={setIngr} ingrType={INGR.TOMATO}>
          Add tomato
        </Button>
      </div>

      <div className="container">
        <div className="burger-top">
          <img src={bulkaTop} alt="bulka"></img>
        </div>
        {ingr.map((el, index) => {
          if (el === INGR.MEAT) {
            return (
              <Ingredient
                type={INGR.MEAT}
                removeElement={removeElement}
                index={index}
                addElement={addElement}
              />
            );
          } else if (el === INGR.CHEESE) {
            return (
              <Ingredient
                type={INGR.CHEESE}
                removeElement={removeElement}
                index={index}
                addElement={addElement}
              />
            );
          } else if (el === INGR.TOMATO) {
            return (
              <Ingredient
                type={INGR.TOMATO}
                removeElement={removeElement}
                index={index}
                addElement={addElement}
              />
            );
          }
        })}
        <div className="burger-bottom">
          <img src={bulkaBottom} alt="bulka"></img>
        </div>
        <div className="plate">
          <img src={talerz} alt="talerz"></img>
        </div>
      </div>
    </div>
  );
}

export default App;
