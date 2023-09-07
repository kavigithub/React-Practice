import { useState } from 'react';
import TotoList from './TotoList';

const TodoState = () => {
  const[inputVal, setInputVal] = useState();  

  const getInput = (param) =>{
    const id = Date.now();
    setInputVal(() => param);
  }   

  return (
    <div>
        <input value={inputVal} type='text' onChange={(e) => setInputVal(e.target.value)}/>
        <TotoList inputVal={inputVal}/>
    </div>
  )
}

export default TodoState