import React from "react";
import { Todo } from "../model";
import "../components/style.css";
import TodoSingle from "../components/TodoSingle";

interface ListItem {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const Todolist = ({ todos, setTodos }: ListItem) => {
  return (
    <div className="todos">
      {todos.map((item) => (
        <li>
          <TodoSingle
            id={item.id}
            key={item.id}
            todo={item.todo}
            isDone={item.isDone}
            todos={todos}
            setTodos={setTodos}
          />
        </li>
      ))}
    </div>
  );
};

export default Todolist;
