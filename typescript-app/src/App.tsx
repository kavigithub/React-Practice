import React, { useState } from 'react';
import './App.css';
import Greet from './components/Greet';
import InputField from './components/InputField';
import { Todo } from './model';
import Todolist from './components/Todolist';

function App() {
 const [todo, setTodo] = useState<string>('');
 const [todos, setTodos] = useState<Todo[]>([]); 

 const handelAddTodo = (e: React.FormEvent) => {
  e.preventDefault();
  if(todo) {
    setTodos((prevItem) => [...prevItem, {id: Date.now(), todo, isDone:false}]);
    setTodo("");
  }
 }

 console.log(todos);

  return (
    <div className="App">
        <Greet name="React" messageCount={20} isLogged={true}></Greet>
        <h1>Taskify</h1>
        <InputField todo={todo} setTodo={setTodo} handelAddTodo={handelAddTodo}></InputField>
        <Todolist todos={todos} setTodos={setTodos}></Todolist>
    </div>
  );
}

export default App;
