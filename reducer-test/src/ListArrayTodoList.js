import React, { useState } from 'react'
import AddTodoInput from './AddTodoInput'
import AddTodoList from './AddTodoList'

const ListArrayTodoList = () => {
  const [todos, setTodos] =  useState([]);  
  const handleOnAddTodo = (param) => {
    console.log('add todo', todos);
    setTodos([...todos, {id: Date.now(), title: param, done: false}])
  }  

  const handleDeleteTodo = (todoId) => {
    console.log(todoId,'delete');
    setTodos(todos.filter((item) => item.id !== todoId));
  }

  const handleEditTodo = (nextTodo) => {
    setTodos(todos.map((item) => (
        item.id === nextTodo.id ? nextTodo : item
    )))
  }

  return (
    <div>
        <h6>List Array todos</h6>
        <AddTodoInput onAddTodo={handleOnAddTodo}></AddTodoInput>
        <AddTodoList todos={todos} onDelete={handleDeleteTodo} onEdit={handleEditTodo}></AddTodoList>
    </div>
  )
}

export default ListArrayTodoList