import React, { useState } from 'react'

const Service = ({yourTipAmout, setYourTipAmout}) => {
 
  return (
    <div>
      <p>How did you like the service 
        <select value={Number(yourTipAmout)} onChange={(e) => setYourTipAmout(Number(e.target.value))}>
          <option value={0}>Dissatified (0%)</option>
          <option value={5}>It was Okay (5%)</option>
          <option value={10}>It was Good (10%)</option>
          <option value={20}>Abosolutely Amezing(20%)</option>
        </select>
      </p>
    </div>
  )
}

export default Service