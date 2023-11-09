import React, { useState } from 'react'

let nextId = 3;
const initialList = [
  { id: 0, title: 'Big Bellies', seen: false },
  { id: 1, title: 'Lunar Landscape', seen: false },
  { id: 2, title: 'Terracotta Army', seen: true },
];

function ItemList({ artworks, onToggle}){
    return(
        <ul>
        {
            artworks.map((item) => <li key={item.id}>
                <input type="checkbox" onChange={(e) => onToggle(item.id, e.target.checked)} checked={item.seen}/>
                <label>{item.title}</label>
            </li>)
        }
    </ul>
    )
}

const UpdateObjectinsideArray = () => {
  const[myList, setMyList] = useState(initialList);  
  const[yourList, setYourList] = useState(initialList);

  function handleSeen(id, isCheck){
    setMyList(myList.map((item) => {
        if (item.id === id) {
            return { ...item, seen: isCheck };
        } else {
            return item
        }
    }))
  }

  function handleYOurList(id, isCheck){
    setYourList(yourList.map((item) => {
        if(item.id === id){
            // Create a *new* object with change properties
            return{...item, seen: isCheck}
        } else {
           // No changes
           return item;
        }
    }))
  }


  return (
    <div>
        <h1>Art Bucket List</h1>
        <h4>My Art List</h4>
      {/*   <ul>{myList.map((item) => <li key={item.id}><input type='checkbox' checked={item.seen} onChange={(e)=> handleSeen(item.id, e.target.checked)}/>{item.title}</li>)}</ul> */}
      <ItemList artworks={myList} onToggle={handleSeen}></ItemList>
        <ItemList artworks={yourList} onToggle={handleYOurList}/>
       {/*  <ul>
            {
                yourList.map((item) => <li key={item.id}>
                    <input type="checkbox" onChange={(e) => handleYOurList(item.id, e.target.value)} checked={item.seen}/>
                    <label>{item.title}</label>
                </li>)
            }
        </ul> */}
    </div>
  )
}

export default UpdateObjectinsideArray