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

  const Button = ({bgColor, textColor, handleClickFun, children}) => {
    return(
      <button
              style={{ backgroundColor: bgColor, color: textColor }}
              onClick={handleClickFun}
            >
            {children}
     </button>
    )
  }

  const StepMessage = ({step, children}) => {
    return(
      <>
        <div className="message">
          <h3>Message {step}</h3>
          <p>{children}</p>
        </div>
      </>
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

          <StepMessage step={step}> {messages[step - 1]} </StepMessage>

          <div className="buttons">
            <Button bgColor="#7950f2" textColor="#fff" handleClickFun={previousMsg}> <span>👈🏻</span> Previous</Button>
            <Button bgColor="#7950f2" textColor="#fff" handleClickFun={() => nextMsg()}> Next  <span>👉🏻</span></Button>
          </div>
        </div>
}   
<Counter />
<RangeStep />

    </>
  );
}

export default App;
