import React, { useContext } from 'react'
import { ItemContextRef } from '../../store/Context-BuyItem';

const WelcomMessage = () => {
  const {buyingItemList} = useContext(ItemContextRef);
  return (
    <div>{buyingItemList.length === 0 && <p>No Item Added Yet!...Enjoy your day</p>}</div>
  )
}

export default WelcomMessage