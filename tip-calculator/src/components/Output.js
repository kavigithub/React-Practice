import React from 'react'

const Output = ({billAmount, tip}) => {
  return (
    <div>
     You pay ${Number(billAmount) + Number(tip)} (${Number(billAmount)} + ${tip} tip)
    </div>
  )
}

export default Output