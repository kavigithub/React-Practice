import React from 'react';
import { Todo } from '../model';
import "../components/style.css";

interface ListItem {
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}

const Todolist: React.FC<ListItem> = ({todos, setTodos}) => {
  return (
    <div className='todos'>
        {todos.map((item) => {
            <div>
                <p>{item.todo}</p>
            </div>
        })}
    </div>
  )
}

export default Todolist