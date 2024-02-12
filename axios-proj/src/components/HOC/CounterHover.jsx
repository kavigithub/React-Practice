import React, {useState} from 'react';
import WithEnhnaceCom from './WithEnhnaceCom';

const CounterHover = (props) => {
   /*  const [count, setCount] = useState(0);  
  
    function increaseCount() {
      setCount((currentCount) => currentCount + 1);
    } */
    const {counter, incrementCounter} = props;
    return (
      <div>
          <p>{counter} : {props.name}</p>
          <button onMouseOver={incrementCounter} onFocus={incrementCounter}>Count</button>
      </div>
    )
}

export default WithEnhnaceCom(CounterHover, 10);