import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import Header from './components/Header';
import DisplayCounter from './components/DisplayCounter';
import ButtonController from './components/ButtonController';
import { useDispatch, useSelector } from 'react-redux';
import { useRef } from 'react';

function App() {
  const privacy = useSelector((state) => state.isVisible);
  const dispatch = useDispatch();
  const inputVal = useRef();

  const increment = () => {
      dispatch({
        type: 'INCREMENT'
      })
  }

  const decrement = () => {
    dispatch({
      type:'DECREMENT'
    })
  }

  const add = () => {
    dispatch({
      type:"ADD",
      payload: {
        num: Number(inputVal.current.value)
      }
    })
    inputVal.current.value = 0
  }

  const subtract = () => {
    dispatch({
      type: "SUBTRACT",
      payload:{
        num: Number(inputVal.current.value)
      }
    })
    inputVal.current.value = 0
  }

  const toggleCounter = () => {
    dispatch({
      type: "TOGGLECOUNTER"
    })
  }

  return (
      <div className="app">
        <Header></Header>
        {privacy ? <>
          <DisplayCounter></DisplayCounter>
          <ButtonController className={'btn btn-success mx-1'}  actionNumber={+1} actionText={'increment'} counterFunc={increment}></ButtonController>
          <ButtonController className={'btn btn-danger mx-1'} actionNumber={-1} actionText={'decrement'} counterFunc={decrement}></ButtonController>
          <br /><br /><br />
          <input ref={inputVal} placeholder='Enter a number...'/>
          <ButtonController className={'btn btn-success mx-1'} actionText={'Add'} counterFunc={add}></ButtonController>
          <ButtonController className={'btn btn-danger mx-1'} actionText={'Subtract'} counterFunc={subtract}></ButtonController>
        </> : <p>Your Counter is Hide please click on Show</p> }
        
        <br /><br />
        <ButtonController className={'btn btn-warning mx-1'} actionText={privacy ? "Hide" : "Show"} counterFunc={toggleCounter}></ButtonController>
      </div>
  )
}

export default App
