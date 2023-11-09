import React, {useState} from 'react'

const CompWithHOC = (OriginalComp) => {
    function NewComp(){
        const [cost, setCost] = useState(10);
 
        let handleCost = () => {
         setCost(cost + 10);
        }

        return (
            <OriginalComp cost={cost} handleCost={handleCost}></OriginalComp>
        )
    }

  return NewComp
}

export default CompWithHOC