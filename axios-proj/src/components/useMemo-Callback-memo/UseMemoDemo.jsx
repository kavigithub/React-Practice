import React, { useState } from 'react';
import { createTodos } from './utils'
import TodoList from './TodoList';

const todos = createTodos();

const UseMemoDemo = () => {
  const[tab, setTab] = useState('All');
  const[theme, setTheme] = useState(false);  
  console.log('redering...')
  return(
    <>
        <button className=' btn btn-dark mx-2' onClick={() => setTab('All')}>All</button>
        <button className=' btn btn-dark mx-2' onClick={() => setTab('Completed')}>Completed</button>
        <button className=' btn btn-dark mx-2' onClick={() => setTab('Active')}>Active</button>
        <input type='checkbox' checked={theme} onChange={(e) => setTheme(e.target.checked)}/>
        <div>
        <TodoList todos={todos} tab={tab} theme={theme}></TodoList>
        </div>
    </>
  )
}

export default UseMemoDemo