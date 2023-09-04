import { useEffect, useReducer } from 'react';
import './App.css';
import DateCounter from './DateCounter';
import Header from './Header';
import Main from './Main';
import Loader from './Loader';
import Error from './Error';
import StartScreen from './StartScreen';
import Question from './Question';
import NextButton from './NextButton';
import Progress from './Progress';
import Finished from './Finished';

const initialState = { //2
  questions: [],
  status: "loading", //error, ready, active, finish
  index: 0,
  answer: null, //null as there will be no answer initially
  points: 0,
  highscore: 0
}

function reducer(state, action){ //3 //4 state, action
  switch(action.type){//5
    case "dataReceived": //6
      //action.payload is just data we received in dispatch
      return {...state, questions: action.payload, status:"ready"}; //7
    case "dataFailed":
      return {...state, status: 'error'};
    case "start":
      return{...state, status: 'active'};  
    case "newAnswer":
      const question = state.questions.at(state.index);
      return {...state, 
        answer:action.payload,
        points: action.payload === question.correctOption ? state.points + question.points : state.points
      }; 
    case "nextQuestion":
      return {...state, index: state.index + 1, answer: null};  
    case "finish":
      return {...state, status: "finished", highscore: state.points > state.highscore ? state.points : state.highscore};
    case "restart":
      return{...initialState, status: "ready", questions: state.questions, highscore: state.highscore}//8
    default: //8
      throw new Error('Action Unknow')  //9
  }
}

function App() {
  const [state, dispach] = useReducer(reducer, initialState); //1
  const {questions, status, index, answer, points, highscore} = state;
  const numQuestion = questions.length;
  //console.log(questions, status, index);
  const maxPossiblePoints = questions.reduce((prevVal, curretVal) => prevVal + curretVal.points, 0);

  useEffect(() => {
    const getData = async() => {
     try {
      const req = await fetch('http://localhost:8000/questions');

      if (!req.ok) throw new Error("Cannot fetch the Questions");

      const data = await req.json();
      dispach({type: 'dataReceived', payload: data}); //10 //11 plz check StartScreen.js
      //payload send some data to reducer function to compute to next state
     // const resp = dispach({type: 'dataReceived', payload: data})
     //console.log(resp, 'questions')
      //return resp;
     } catch (error) {
       dispach({type: "dataFailed"})
     }
    }
    getData();
  }, [])

  return (
    <div className="App">
     {/*  <DateCounter></DateCounter> */}
     <Header></Header>
     <Main>
      {status === 'loading' && <Loader></Loader>}
      {status === 'error' && <Error></Error>}
      {status === 'ready' && <StartScreen numQuestion={numQuestion} dispach={dispach}></StartScreen>}
      {status === 'active' && (
        <>
          <Progress index={index} numQuestion={numQuestion} points={points} maxPossiblePoints={maxPossiblePoints}></Progress>
          <Question questions={questions[index]} dispach={dispach} answer={answer}></Question>
          <NextButton dispatch={dispach} answer={answer} index={index} numQuestion={numQuestion}></NextButton>
        </>
      )}
      {status === 'finished' && (<Finished points={points} maxPossiblePoints={maxPossiblePoints} highscore={highscore} dispach={dispach}/>)}
     </Main>
    </div>
  );
}

export default App;
