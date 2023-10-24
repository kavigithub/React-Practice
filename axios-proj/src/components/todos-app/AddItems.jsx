import React, { useState } from 'react'

const AddItems = ({addTodo, todoInput, addTodosTxt}) => {
 
  return (
    <div>
        <input value={todoInput} onChange={(e) => addTodosTxt(e.target.value)} />
        <button onClick={addTodo}>Add Item</button>
    </div>
  )
}

export default AddItems