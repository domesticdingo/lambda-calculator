import React from "react";

const SpecialButton = (props) => {
  return (
    <>
      <button className="specialButton">
        <span>{props.button}</span>
      </button>
    </>
  );
};

export default SpecialButton