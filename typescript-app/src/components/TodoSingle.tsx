import React from 'react';
import { Todo } from '../model';

type TodoSingle = {
  todo: Todo,
  todos: Todo[], 
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoSingle = ({todo, todos, setTodos} : TodoSingle) => {
  return (
    <div className=' d-flex '>
        <p>{id}</p>
        <p>{todos}</p>
        <p>{isDone}</p>
    </div>
  )
}

export default TodoSingle