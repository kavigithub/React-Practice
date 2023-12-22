import React from 'react'

const WelcomMessage = ({buyingItemList}) => {
  return (
    <div>{buyingItemList.length === 0 && <p>No Item Added Yet!...Enjoy your day</p>}</div>
  )
}

export default WelcomMessage