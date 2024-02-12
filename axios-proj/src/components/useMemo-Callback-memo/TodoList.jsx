import React, {useMemo} from "react";
import {filterTab} from './utils'

const TodoList = ({ todos, tab, theme }) => {
   let visibleList = useMemo(() => filterTab(todos, tab), [todos, tab]);
  return (
    <>
      <div className={`${theme && 'bg-dark text-white'}`}>
        {visibleList.map((todo) => (
          <div className={`list-group-item ${todo.completed && 'text-decoration-line-through'}`} key={todo.id} id={todo.id}>
            {todo.text}
          </div>
        ))}
      </div>
    </>
  );
};

export default TodoList;
