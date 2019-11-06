import React from "react";

const NumberButton = (props) => {
  return (
    <button className="numberButton">
      <span>{props.button}</span>
    </button>
  );
};

export default NumberButton