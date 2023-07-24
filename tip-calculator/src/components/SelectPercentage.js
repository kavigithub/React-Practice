import React from 'react'

const SelectPercentage = ({percentage, setPercentage, children}) => {
  return (
    <div>
    <label>{children}</label>
      <select value={Number(percentage)} onChange={(e) => setPercentage(Number(e.target.value))}>
        <option value={0}>Dissatified (0%)</option>
        <option value={5}>It was Okay (5%)</option>
        <option value={10}>It was Good (10%)</option>
        <option value={20}>Abosolutely Amezing(20%)</option>
      </select>
  </div>
  )
}

export default SelectPercentage;