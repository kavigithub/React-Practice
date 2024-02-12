import React from 'react'
import HOCdemo from './HOCdemo'

const UsedInHoc = ({value}) => {
  return (
    <div>
        <p>Person Details</p>
        <p>{value.name}</p>
        <p>{value.role}</p>
    </div>
  )
}

export default HOCdemo(UsedInHoc)

