import React, { useState } from 'react'

const TodoItem = ({itemHTML, deleteItem, editItem}) => {
    const[checked, setChecked] = useState(itemHTML?.isDone);
    const [isEdit, setIsEdit] = useState(false);
    let todoContent;

    if(isEdit){
      todoContent = (
        <>
          <input value={itemHTML.todoVal} onChange={(e) => editItem({...itemHTML, todoVal: e.target.value})}/>
          <button  className='btn btn-add m-1' onClick={() => setIsEdit(false)}>Save</button>
        </>
      )
    } else {
      todoContent = (
        <>
         <span style={checked ? { textDecoration: "line-through" } : {}}>{ itemHTML?.todoVal}</span>
         <button className='btn btn-add m-1' onClick={() => setIsEdit(true)} disabled={checked}> Edit</button>
        </>
      )
    }

   function checkINput() {
    setChecked((prev) => !prev)
   } 

  return (
    <div>

        <input type='checkbox' checked={checked} onChange={checkINput}/>
        {todoContent}
        <button className='btn btn-delete m-1' onClick={() => deleteItem(itemHTML.id)}>Delete</button>
    </div>
  )
}

export default TodoItem