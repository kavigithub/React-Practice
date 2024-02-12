import React, { useContext } from 'react'
import { UserContext } from './Store'

const Welcome = () => {
  const{userDetails}= useContext(UserContext);
  return (
    <div>Welcome!!!, You can login with {userDetails.email}</div>
  )
}

export default Welcome