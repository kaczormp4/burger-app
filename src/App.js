import { useState } from "react";
import "./App.css";
// @ts-ignore
import bulkaTop from "./pic.png/bulka-top.png";
import bulkaBottom from "./pic.png/bulka-bottom.png";
import mieso from "./pic.png/mieso.png";
import ser from "./pic.png/ser.png";
import React from "react";

function App() {
  const [ingr, setIngr] = useState([]);

  const INGR = {
    MEAT: "meat",
    CHESS: "chess",
  };

  console.log(ingr);
  return (
    <div className="App">
      <div className="buttons">
        <button onClick={() => setIngr([...ingr, INGR.MEAT])}>Add meat</button>
        <button onClick={() => setIngr([...ingr, INGR.CHESS])}>
          Add chess
        </button>
      </div>

      <div className="container">
        <div className="burger-top">
          <img src={bulkaTop} alt="bulka"></img>
        </div>
        {ingr.map((el) => {
          if (el === INGR.MEAT) {
            return (
              <div className="meat">
                <img src={mieso} alt="mieso"></img>
              </div>
            );
          } else if (el === INGR.CHESS) {
            return (
              <div className="chees">
                <img src={ser} alt="ser"></img>
              </div>
            );
          }
        })}
        {/* {chees.map((el) => (
          <div className="chees">
            <img src={ser} alt="ser"></img>
          </div>
        ))} */}
        <div className="dhdhd"></div>
        <div className="burger-bottom">
          <img src={bulkaBottom} alt="bulka"></img>
        </div>
      </div>
    </div>
  );
}

export default App;
