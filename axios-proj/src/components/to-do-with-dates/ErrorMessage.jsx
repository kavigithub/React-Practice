import React from 'react'

const ErrorMessage = ({foodItem}) => {
  return (
    <>
        {
          foodItem.length <= 0 ? 'Sorry we are not found any todo list'  : null
        }
    </>
  )
}

export default ErrorMessage