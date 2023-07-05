import React from 'react'
import { text } from 'stream/consumers'

const Button = ({text, onClick}: any) => {
  return (
    <>
        <button className='btn btn-primary m-1' onClick={onClick}> {text} </button>
    </>
  )
}

export default Button