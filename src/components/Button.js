import React, { useState } from "react";

const Button = () => {
  const handleClick = () => {
    buttonText === "Click me, please"
      ? setButtonText("Thanks, been clicked!")
      : setButtonText("Click me, please");
  };
  const [buttonText, setButtonText] = useState("Click me, please");
  return (
    <button
      style={{
        display: "flex",
        alignItems: "center",
        fontStyle: "italic",
        backgroundColor: "green",
        padding: "20px",
        margin: "10px"
      }}
      onClick={handleClick}
    >
      {buttonText}
    </button>
  );
};

export default Button;
