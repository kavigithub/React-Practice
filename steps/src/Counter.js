import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const [stepCount, setStepCount] = useState(1);

  const date = new Date();
  date.setDate(date.getDate() + count);

  return (
    <>
      <div className="steps">
        <div>
          <p>
            <span>
              {count === 0 ? "Today is " : (count > 0 ) ? `${count} days from today is `
 : `${Math.abs(count)} days ago was `}
            </span>
            <span>{date.toDateString()}</span>
          </p>
          <p className="message">Count : {count}</p>
          <div className="buttons">
            <button
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
              onClick={() => setCount((minus) => minus - stepCount)}
            >
              -
            </button>
            <button
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
              onClick={() => setCount((add) => add + stepCount)}
            >
              +
            </button>
          </div>
        </div>
        <hr></hr>
        <div>
          <p className="message">StepCount : {stepCount}</p>
          <div className="buttons">
            <button
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
              onClick={() => setStepCount((minus) => minus - 1)}
            >
              -
            </button>
            <button
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
              onClick={() => setStepCount((add) => add + 1)}
            >
              +
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Counter;
