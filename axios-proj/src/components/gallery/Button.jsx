import React from 'react'

const Button = ({children, nextSculpture, disabled}) => {
  return (
    <button style={{marginRight:"10px"}} className="btn" disabled={disabled} onClick={nextSculpture}>{children}</button>
  )
}

export default Button