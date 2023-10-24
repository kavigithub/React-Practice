import React, {useState} from 'react'
import TodoItem from "./TodoItem"

const TodoList = ({items, deleteItem, editItem}) => {
  const [searchText, setSearchText] = useState('');   
  return (
    <>
      
       {/* {
        items.filter((item) => {
         return searchText.toLowerCase() === item?.todoVal.toLowerCase().includes(searchText)
        }).map((item) => (
          <li key={item?.id}><TodoItem key={item?.id} itemHTML={item} deleteItem={deleteItem} editItem={editItem}/></li>  
         ))
¸       } */}
      {
        items.map((item) => <li key={item?.id}><TodoItem key={item?.id} itemHTML={item} deleteItem={deleteItem} editItem={editItem}/></li>
        )
      }
      </>   
  )
}

export default TodoList