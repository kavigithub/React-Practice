import React, { useState } from "react";
import InputNumbers from "./InputNumbers";
import Buttons from "./Buttons";

const buttonName = [
  "+",
  "-",
  "*",
  "/",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "=",
  ".",
  "0",
  "9",
  "C",
];

const CalculatorOutlet = () => {
  const [displayValue] = React.useState(buttonName);
  //const [inputVal, setInputVal] = useState([]);
  const [inputVal, setInputVal] = useState("");

  const onDisplayCal = (buttonText) => {
    //setInputVal((prevVal) => [...prevVal, buttonText]);
    if (buttonText === "C") {
      setInputVal("");
    } else if (buttonText === "=") {
      try {
        let result = eval(inputVal);
        setInputVal(result);
      } catch (error) {
        alert("Error!");
      }
    } else {
      const newVal = inputVal + buttonText;
      setInputVal(newVal);
    }
  };
  
  return (
    <div className="w-80 border-2 border-sky-500 p-4">
      <InputNumbers displayValue={inputVal} />
      <Buttons displayBtnVal={displayValue} handleClickEvt={onDisplayCal} />
    </div>
  );
};

export default CalculatorOutlet;
