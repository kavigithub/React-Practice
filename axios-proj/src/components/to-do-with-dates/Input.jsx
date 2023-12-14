import React from 'react'

const Input = ({handleKeyPress}) => {
  
  return (
    <div>
        <input type='text' placeholder='please enter todo here' onKeyDown={handleKeyPress} style={{padding:'10px', marginBottom:'10px' }}/>
    </div>
  )
}

export default Input