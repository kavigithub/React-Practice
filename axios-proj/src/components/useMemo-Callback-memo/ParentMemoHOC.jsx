import React, { useState } from 'react'
import ChildMemoHOC from './ChildMemoHOC'

const ParentMemoHOC = () => {
  const [newParentData, setNewParentData] = useState([]);  
  const [newChildData, setNewChildData] = useState([]);  

  function addParentData(){
    setNewParentData((prevData) => [{textP:'new parent data '}, ...prevData]);
  }
  function addChildData(){
    setNewChildData((prevData) => [{newText: 'Add Child Data '},...prevData])
  }  
    
  console.log("Parent component render...");
  return (
    <div>
        <h1>Parent Memo HOC</h1>
        {newParentData.map((item, index) => <p key={index}>{item.textP + (index + 1)}</p>)}
        <button onClick={addParentData}>Add parent Data</button>

        <hr />
        <ChildMemoHOC newChildData={newChildData} />
        <button onClick={addChildData}>Add Child Data</button>
    </div>
  )
}

export default ParentMemoHOC    