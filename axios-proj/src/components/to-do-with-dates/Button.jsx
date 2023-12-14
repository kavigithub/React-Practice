import React, { MouseEventHandler } from 'react'

/* interface ButtonFormate {
    type: "button" | "reset" | "submit",
    children: string,
    handleAction: MouseEventHandler<HTMLButtonElement>
} */

const Button = ({type, children, handleAction, actionClass}) => {
  return (
    <button type={type} className={actionClass} onClick={handleAction}>{children}</button>
  )
}

export default Button