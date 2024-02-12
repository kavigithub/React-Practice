import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import Header from './components/Header';
import DisplayCounter from './components/DisplayCounter';
import ButtonController from './components/ButtonController';
import { useDispatch, useSelector } from 'react-redux';
import { useRef } from 'react';
import { increment, decrement, add, subtract } from './store/counterStore';
import { toggle } from './store/privacyStore';

function App() {
  const privacy = useSelector((state) => state.isVisible);
  const dispatch = useDispatch();
  const inputVal = useRef();

  const handleIncrement = () => {
    dispatch(increment());
  }

  const handleDecrement = () => {
    dispatch(decrement());
  }

  const handleAdd = () => {
    let num = Number(inputVal.current.value);
    if (Number.isNaN(num)) return;
    else dispatch(add(num));
    inputVal.current.value = 0
  }

  const handleSubtract = () => {
    let num = Number(inputVal.current.value);
    if (Number.isNaN(num)) return;
    else dispatch(subtract(num))
    inputVal.current.value = 0
  }

  const toggleCounter = () => {
    dispatch(toggle());
  }

  return (
      <div className="app">
        <Header></Header>
        {privacy ? <>
          <DisplayCounter></DisplayCounter>
          <ButtonController className={'btn btn-success mx-1'}  actionNumber={+1} actionText={'increment'} counterFunc={handleIncrement}></ButtonController>
          <ButtonController className={'btn btn-danger mx-1'} actionNumber={-1} actionText={'decrement'} counterFunc={handleDecrement}></ButtonController>
          <br /><br /><br />
          <input ref={inputVal} placeholder='Enter a number...'/>
          <ButtonController className={'btn btn-success mx-1'} actionText={'Add'} counterFunc={handleAdd}></ButtonController>
          <ButtonController className={'btn btn-danger mx-1'} actionText={'Subtract'} counterFunc={handleSubtract}></ButtonController>
        </> : <p>Your Counter is Hide please click on Show</p> }
        
        <br /><br />
        <ButtonController className={'btn btn-warning mx-1'} actionText={privacy ? "Hide" : "Show"} counterFunc={toggleCounter}></ButtonController>
      </div>
  )
}

export default App
