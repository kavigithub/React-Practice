import React, { useState } from 'react'
import AddItems from './AddItems';
import TodoList from './TodoList';

let nextId = 0;

const TodoApp = () => {
    const[todoInput, setTodoInput] = useState('');
    const[addItems, setAddItems] = useState([]);


    function addTodoItems(){
        setAddItems([...addItems,  {id: nextId++, todoVal: todoInput, isDone: false}]);
        setTodoInput('');
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
        <h1>Todo App</h1>
        <AddItems todoInput={todoInput} addTodosTxt={setTodoInput} addTodo={addTodoItems}/>
        <TodoList items={addItems} deleteItem={handleDeleteItem} editItem={handleEditItem}/>
    </div>
  )
}

export default TodoApp