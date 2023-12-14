import React, {useState} from 'react'
import SingleItem from './SingleItem';


const TodoList = ({listItem, handleDeleteAction, handelEditAction}) => {
  const [doneItem, setItemDone] = useState([])

  const handleDoneAction = (currentItem) => {
    //console.log(e.target.parentElement)
    //setItemDone([item])
    setItemDone((prevVal) => [...prevVal, currentItem])
  }
  return (
    <ul className='list-group bi-list-ul'>
      {listItem.map((item) => <SingleItem key={item.name}  singleItem={item} todoItem={doneItem.includes(item)} handleDoneAction={() =>handleDoneAction(item)} handleDeleteAction={()  => handleDeleteAction(item)} handelEditAction={handelEditAction}/>)}
    </ul>
  )
}

export default TodoList