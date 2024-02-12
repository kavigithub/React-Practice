import React, { memo, useCallback } from 'react'

const ChildMemoHOC = ({newChildData}) => {
    const localChildData = useCallback(() => newChildData, [newChildData]);

  console.log("Child component render...");
  return (
    <div>
        <h1>Child Memo HOC</h1>
        {localChildData.map((item, index) => <p key={index}>{item.newText + (index + 1)}</p>)} 
        {/*  <button onClick={addChildData}>Add Child Data</button>   */}
    </div>
  )
}

export default memo(ChildMemoHOC)