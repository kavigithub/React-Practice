import React from 'react'

const Reset = ({setBillAmount, setFriendTipAmout, setYourTipAmout}) => {
  
   const clearVal = () => {
    setBillAmount(0);
    setFriendTipAmout(0);
    setYourTipAmout(0);
   } 

  return (
    <div>
        <button onClick={clearVal}>Reset</button>
    </div>
  )
}

export default Reset