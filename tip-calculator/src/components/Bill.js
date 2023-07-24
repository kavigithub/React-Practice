import React, {useState} from 'react'

const Bill = ({billAmount, billAmountFunc}) => {
    
  return (
    <div>
        <p>How much was the bill? 
            <input type='number' value={billAmount} onChange={(e) => billAmountFunc(e.target.value)}/>
        </p>
    </div>
  )
}

export default Bill