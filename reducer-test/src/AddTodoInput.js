import React, { useState } from 'react'

const AddTodoInput = ({onAddTodo}) => {
    const [inputVal, setInputVal] = useState();
  return (
    <div>
        <input value={inputVal} onChange={(e) => setInputVal(e.target.value)}/>
        <button onClick={(e)=>{
            setInputVal('');
            onAddTodo(inputVal);
        }}>Add</button>
    </div>
  )
}

export default AddTodoInput