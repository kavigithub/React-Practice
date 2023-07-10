import React, { useState } from "react";

const RangeStep = () => {
  const [stepValue, setStepValue] = useState(0);
  const [rangeValue, setRangeValue] = useState(1);

  const date = new Date();
  date.setDate(date.getDate() + stepValue);

  const resetRangeVal = () => {
    setStepValue(0);
    setRangeValue(1);
  };

  return (
    <div className="steps">
      <div>
        <p className="message">StepCount : {rangeValue}</p>
        <p>
          <input
            type="range"
            value={Number(rangeValue)}
            min={0}
            max={10}
            style={{ width: "100%" }}
            onChange={(e) => setRangeValue(e.target.value)}
          />
        </p>

        <div className="buttons">
          <button
            style={{ backgroundColor: "#7950f2", color: "#fff" }}
            onClick={() =>
              setStepValue((minus) =>
                Number(minus) <= 0 ? 0 : Number(minus) - Number(rangeValue)
              )
            }
          >
            -
          </button>
          <input
            type="number"
            value={Number(stepValue)}
            onChange={(e) => setStepValue(Number(e.target.value))}
          />
          <button
            style={{ backgroundColor: "#7950f2", color: "#fff" }}
            onClick={() =>
              setStepValue((add) => Number(add) + Number(rangeValue))
            }
          >
            +
          </button>
        </div>

        <p>
          <span>
            {stepValue === 0
              ? "Today is "
              : stepValue > 0
              ? `${stepValue} days from today is `
              : `${Math.abs(stepValue)} days ago was `}
          </span>
          {date.toDateString()}
        </p>

        {stepValue !== 0 || rangeValue !== 1 ? (
          <p style={{ textAlign: "center" }}>
            <button
              style={{
                backgroundColor: "#7950f2",
                color: "#fff",
                padding: "10px",
                border: "none",
              }}
              onClick={resetRangeVal}
            >
              RESET
            </button>
          </p>
        ) : null}
      </div>
    </div>
  );
};

export default RangeStep;
