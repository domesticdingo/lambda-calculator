import React, {useState} from "react";
import SpecialButton from "./SpecialButton";
import {specials} from "../../../data";

//import any components needed

//Import your array data to from the provided data file

const Specials = () => {
  // STEP 2 - add the imported data to state
  const [special] = useState(specials);
  return (
    <div>
      {special.map((b,index) => 
        <SpecialButton key = {index} button = {b} />
      )}
    </div>
  );
};

export default Specials;