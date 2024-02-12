import React, { useState } from 'react'

const WithEnhnaceCom = (OriginalComponent, increaseCount) => {
    // HOC logic using hooks
 function NewComponent(props){
     const [counter, setCounter] = useState(10);   

    return (
            <OriginalComponent counter={counter} incrementCounter={() => setCounter((count) => count + increaseCount )} {...props} />
    )
  }
  return NewComponent;
}

export default WithEnhnaceCom