import React, { useState } from 'react'

const AddItems = ({addTodo}) => {
  const[todoInput, setTodoInput] = useState('');

  function handdleSubmit(e){
    e.preventDefault();
    if(todoInput === "") return;
    addTodo(todoInput);
    setTodoInput("");
  }
 
  return (
    <div>
        <input value={todoInput} onChange={(e) => setTodoInput(e.target.value)} />
        <button onClick={handdleSubmit}>Add Item</button>
    </div>
  )
}

export default AddItems