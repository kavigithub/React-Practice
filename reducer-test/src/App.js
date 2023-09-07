import { useReducer, useState} from 'react';
import './App.css';
import BankAc from './BankAc';
import TodoState from './TodoState';
import UpdateObjState from './UpdateObjState';
import ListArrayTodoList from './ListArrayTodoList';


function reducer(state, action) {
  console.log(action);
  switch(action.type){
    case "increment":
      return {count : state.count + 1} ;
    case "decrement":
      return {count : state.count - 1} ;
    case "reset":
      return {count : 0} ;
    default :
    throw new Error('value not defined');  
  }
}

function App() {
  const [number, setNumber] = useState(0);
  
  const increment = () => {
    setNumber((currentVal) => currentVal + 1);
  }

  const decrement = () => {
    setNumber((currentVal) => currentVal - 1);
  }

  const reset = () => {
    setNumber(0);
  }

  const initialValue = { count: 0 };

  const [state, dispatch] = useReducer(reducer, initialValue);


  return (
    <div className="App">
      <button onClick={increment}>+</button>
      <span>{number && number <= 0 ? 0 : number}</span>
      <button onClick={decrement}>-</button>
      <p><button onClick={reset}>Reset</button></p> 
      <hr />

      <button onClick={() => dispatch({type: 'increment'})}>+</button>
      <span>Count : {state.count}</span>
      <button onClick={() => dispatch({type: 'decrement'})}>-</button>
      <p><button onClick={() => dispatch({type: 'reset'})}>Reset</button></p>

      <hr></hr>
      <BankAc></BankAc>

      <hr></hr>
      <TodoState></TodoState>

      <hr></hr>
      <UpdateObjState></UpdateObjState>

      <hr></hr>
      <ListArrayTodoList></ListArrayTodoList>
    </div>
  );
}

export default App;
