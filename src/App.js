import { useState } from "react";
import "./App.css";
import bulkaTop from "./pic.png/bulka-top.png";
import bulkaBottom from "./pic.png/bulka-bottom.png";
import mieso from "./pic.png/mieso.png";
import ser from "./pic.png/ser.png";
import pomidor from "./pic.png/pomidor.png";
import React from "react";

function App() {
  const [ingr, setIngr] = useState([""]);

  const INGR = {
    MEAT: "meat",
    CHESS: "chess",
    TOMATO: "tomato",
  };

  const removeElement = (index) => {
    const element = ingr.filter((_, i) => i !== index);
    console.log(element);
    setIngr(element);
  };

  console.log(ingr);
  return (
    <div className="App">
      <div className="buttons">
        <button onClick={() => setIngr([...ingr, INGR.MEAT])}>Add meat</button>
        <button onClick={() => setIngr([...ingr, INGR.CHESS])}>
          Add chess
        </button>
        <button onClick={() => setIngr([...ingr, INGR.TOMATO])}>
          Add tomato
        </button>
      </div>

      <div className="container">
        <div className="burger-top">
          <img src={bulkaTop} alt="bulka"></img>
        </div>
        {ingr.map((el, index) => {
          if (el === INGR.MEAT) {
            return (
              <div className="meat">
                <img
                  src={mieso}
                  onClick={() => removeElement(index)}
                  alt="mieso"
                ></img>
              </div>
            );
          } else if (el === INGR.CHESS) {
            return (
              <div className="chees">
                <img
                  src={ser}
                  onClick={() => removeElement(index)}
                  alt="ser"
                ></img>
              </div>
            );
          } else if (el === INGR.TOMATO) {
            return (
              <div className="tomato">
                <img
                  src={pomidor}
                  onClick={() => {
                    const array = [...ingr];
                    array.splice(index, 1);
                    setIngr(array);
                  }}
                  alt="pomidor"
                ></img>
              </div>
            );
          }
        })}

        <div className="burger-bottom">
          <img src={bulkaBottom} alt="bulka"></img>
        </div>
      </div>
    </div>
  );
}

export default App;
