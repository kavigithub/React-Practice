import React, { useState } from 'react';
import WithEnhnaceCom from './WithEnhnaceCom';

const CounterClik = (props) => {
/*   const [count, setCount] = useState(0);  
  
  function increaseCount() {
    setCount((currentCount) => currentCount + 1);
  } */

  const {counter, incrementCounter, name} = props;

  return (
    <div>
        <p>{counter} : {name}</p>
        <button onClick={incrementCounter}>Count</button>
    </div>
  )
}

export default WithEnhnaceCom(CounterClik, 3);