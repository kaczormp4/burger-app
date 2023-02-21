import React from "react";
import "./Button.css";

const Button = ({ children, ingr, setIngr, ingrType }) => {
  return (
    <button onClick={() => setIngr([...ingr, ingrType])}>{children}</button>
  );
};
export default Button;
