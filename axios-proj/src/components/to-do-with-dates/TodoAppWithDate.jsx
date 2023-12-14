import React, { useState } from 'react'
import TodoList from './TodoList';
import Input from './Input';
import ErrorMessage from './ErrorMessage';

const todoItemArr = [
    {
        name: 'buy milk',
        dueDate: '23/11/2023'
    },
    {
        name: 'ekdashi',
        dueDate: '23/11/2023'
    }
];

const TodoAppWithDate = () => {
    const [todoItem, setTodoItem] = useState([]);
    let date = new Date();

    const onKeyPress = (e) => {
       // console.log(e.key);
        if(e.key === "Enter"){
            let newTask = e.target.value;
            e.target.value = '';  
            setTodoItem((prevVal) => [...prevVal, {name: newTask, dueDate: date.toLocaleDateString()}])  
        }  
    } 

    const handleDeleteAction = (currentItem) => {
        let deleteItem = todoItem.filter(item => item !== currentItem);
       // setTodoItem([...todoItem.filter((item)=> item !== currentItem)]);
        console.log(todoItem);
        setTodoItem(deleteItem);
    }

   /*  const handelEditAction = (currentItem) => {
        //alert("edit is working");
        setTodoItem(todoItem.map((item) => {
           if(item.name === currentItem.name){
                return currentItem
           } else {
                 return item
           }
        }))
    } */

    const handelEditAction = (currentItem) => {
        setTodoItem((prevItems) =>
          prevItems.map((item) => (item.name === currentItem.name ? currentItem : item))
        );
      };

  return (
    <>
        <div>TodoApp </div>
        <p>please check: https://youtube.com/shorts/9uSlFiOqi78?si=KjnEmg_1Egs6op3j</p>
        <Input handleKeyPress={onKeyPress} />
        <ErrorMessage foodItem={todoItem} />
        <TodoList listItem={todoItem} handleDeleteAction={handleDeleteAction} handelEditAction={handelEditAction}/>
    </>
  )
}

export default TodoAppWithDate