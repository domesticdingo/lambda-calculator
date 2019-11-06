import React, {useState} from "react";
import NumberButton from "./NumberButton";
import {numbers} from "../../../data";

//import any components needed
// example of import from data.js. Note all the ../   This is how we move through folders. 
/* 
import { numbers } from '../../../data' 
*/
//Import your array data to from the provided data file


const Numbers = ()  => {
  // STEP 2 - add the imported data to state
  const [buttonNumber] = useState(numbers);
  return (
    <div className="numberContainer">
      {buttonNumber.map((b,index) => 
        <NumberButton key = {index} button = {b} />
      )}
    </div>
  );
};

export default Numbers;
