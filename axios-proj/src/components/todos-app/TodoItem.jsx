import React, { useState } from 'react'

const TodoItem = ({itemHTML, deleteItem, editItem}) => {
    const[checked, setChecked] = useState(false);
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

   function checkINput(e) {
    //setChecked((prev) => !prev)
    editItem({ ...itemHTML , isDone: e.target.checked})
   } 

  return (
    <>
        <input type='checkbox' checked={itemHTML.isDone} onChange={checkINput}/>
        {todoContent}
        <button className='btn btn-delete m-1' onClick={() => deleteItem(itemHTML.id)}>Delete</button>
    </>
  )
}

export default TodoItem