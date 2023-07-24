import React from 'react'

const Button = ({children, onClick}) => {
  return (
    <button onClick={onClick} className=' btn btn-primary m-1'>{children}</button>
  )
}

export default Button