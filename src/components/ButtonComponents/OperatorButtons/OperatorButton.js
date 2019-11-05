import React from "react";

const OperatorButton = (props) => {
  return (
    <>
      <button className="operatorButton">
        <span>{props.button.char}</span>
      </button>
    </>
  );
};

export default OperatorButton