import React, {useState} from 'react'
import TodoItem from "./TodoItem"

const TodoList = ({items, deleteItem, editItem}) => {
  return (
    <>
      {
        items.map((item) => <li key={item?.id}><TodoItem key={item?.id} itemHTML={item} deleteItem={deleteItem} editItem={editItem}/></li>
        )
      }
      </>   
  )
}

export default TodoList