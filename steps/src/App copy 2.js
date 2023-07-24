import { useState } from "react";
import "./App.css";
import Counter from "./Counter";
import RangeStep from './RangeStep';

const messages = [
  "Learn React #",
  "Apply For Jobs",
  "Invest your new Income :)",
];

function App() {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  const nextMsg = () => {
   if(step < 3) setStep((s) => s  + 1);
  }

  const previousMsg = () => {
    if(step > 1) setStep((s) => s - 1);
  }

  const Button = ({bgColor, textColor, handleClickFun, btnText}) => {
    return(
      <button
              style={{ backgroundColor: bgColor, color: textColor }}
              onClick={handleClickFun}
            >
              {btnText}
     </button>
    )
  }

  return (
    <>
    <button className="close" onClick={() => setIsOpen(!isOpen)}>X</button>

    { isOpen && <div className="steps">
          <div className="numbers">
            <div className={step >= 1 ? 'active': ''}>1</div>
            <div className={step >= 2 ? 'active': ''}>2</div>
            <div className={step >= 3 ? 'active': ''}>3</div>
          </div>

          <p className="message">
            Message : { messages[step - 1]}
          </p>

          <div className="buttons">
            <Button bgColor="#7950f2" textColor="#fff" handleClickFun={previousMsg} btnText="Previous"/>
            {/* <button
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
              onClick={previousMsg}
            >
              Previous
            </button> */}
            <button
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
              onClick={() => nextMsg()}
            >
              Next
            </button>
          </div>
        </div>
}   
<Counter />
<RangeStep />

    </>
  );
}

export default App;
