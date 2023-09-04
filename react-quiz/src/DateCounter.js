import { useReducer } from "react";

function reducer(state, action) {
  console.log(state, "currentState", action, "action");
  console.log(action.type, action)
  switch (action.type) {
    case "dec":
      return { ...state, count: state.count - state.step };
    case "inc":
      return { ...state, count: state.count + state.step };
    case "setCount":
      return { ...state, count: action.payload };
    case "setStep":
      return { ...state, step: action.payload };
    case "reset":
      return { count: 0, step: 1 };
    default:
      throw new Error("Unknown action");
  }
}

function DateCounter() {
  // const [count, setCount] = useState(0);
  //const [step, setStep] = useState(1);
  const initialState = { count: 0, step: 1 };
  const [state, dispatch] = useReducer(reducer, initialState); // 0 is the initialState
  const { count, step } = state;
  console.log(state, 'state');

  //when reducer function actually called?
  //useReducer function returns current state (in this case count) count is the current State
  //useReducer also returning Dispatch which used to update the state value
  //this Dispatch function has the reducer function updated value
  //Reducer function gets access to current state i.e (initialState, 0) and get access of action which is
  // has dispach(where u invoke this dispatch) function has actual value (dispatch(5))

  // This mutates the date object.
  const date = new Date("june 21 2027");
  date.setDate(date.getDate() + count);

  const dec = function () {
    //setCount((count) => count - step);
    dispatch({ type: "dec"});
  };

  const inc = function () {
    //setCount((count) => count + step);
    dispatch({ type: "inc"});
  };

  const defineCount = function (e) {
    dispatch({ type: "setCount", payload: Number(e.target.value) });
  };

  const defineStep = function (e) {
    dispatch({ type: "setStep", payload: Number(e.target.value) });
  };

  const reset = function () {
    dispatch({ type: "reset" });
  };

  return (
    <div className="counter">
      <div>
        <input
          type="range"
          min="0"
          max="10"
          value={step}
          onChange={defineStep}
        />
        <span>{step}</span>
      </div>

      <div>
        <button onClick={dec}>-</button>
        <input value={count} onChange={defineCount} />
        <button onClick={inc}>+</button>
      </div>

      <p>{date.toDateString()}</p>

      <div>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
}
export default DateCounter;
