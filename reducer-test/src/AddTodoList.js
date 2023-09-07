import React, { useState } from "react";

const AddTodoList = ({ todos, onDelete, onEdit }) => {
  const [isEditing, setIsEditing] = useState();

  return (
    <>
      {todos.map((item, index) => (
        <div style={{ margin: "5px" }} key={item.id} id={item.id}>
          <input
            type="checkbox"
            checked={item.done}
            onChange={(e) => onEdit(e.target.checked)}
          />

          {
            isEditing ?  
            <>
                <input value={item.title} onChange={(e) => onEdit({ ...item, title: e.target.value })}/>
                <button onClick={() => setIsEditing(false)}>Save</button>
            </> : 
            <>
                <span>{item.title}</span>
                <button onClick={(e) => {setIsEditing(true);}}>Edit</button>
            </>          
          }  

          <button onClick={() => onDelete(item.id)}>delete</button>
        </div>
      ))}
    </>
  );
};

export default AddTodoList;
