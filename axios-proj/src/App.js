import './App.css';
import User from './components/User';
import TodoApp from './components/todos-app/TodoApp';
import Tours from './components/tours/Tours';
import PlainCounter from './components/useStateConcpet/PlainCounter';

function App() {
  return (
    <div className="App">
        {/* <User></User> */}
       {/*  <Tours /> */}
       {/* <PlainCounter></PlainCounter> */}
       <TodoApp />
    </div>
  );
}

export default App;
