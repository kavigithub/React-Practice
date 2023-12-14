import React, { useState } from 'react'
import AddItems from './AddItems';
import TodoList from './TodoList';

const TodoApp = () => {
    
    const[addItems, setAddItems] = useState([]);

    function addTodoItems(todoVal){
      setAddItems((currentItem) => {
        return [...currentItem, {id:crypto.randomUUID(), todoVal, isDone: false}];
      });
    }

    function handleDeleteItem(id){
       let filterItemList = addItems.filter((item) => item.id !== id);
       setAddItems(filterItemList);
    }

    function handleEditItem(editTodo){
        setAddItems(addItems.map(item => {
          if (item.id === editTodo.id) {
            return editTodo
          } else {
            return item
          }
        }))
    }

  return (
    <div>
        <p>Ref site: 'https://react.dev/learn/updating-arrays-in-state'</p>
        <h1>Todo App</h1>
        <AddItems addTodo={addTodoItems}/>
        {addItems.length === 0 && "No todos added"}
        <TodoList items={addItems} deleteItem={handleDeleteItem} editItem={handleEditItem}/>
    </div>
  )
}

export default TodoApp