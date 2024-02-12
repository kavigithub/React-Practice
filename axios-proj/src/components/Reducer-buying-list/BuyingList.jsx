import React, { useContext } from 'react'
import { ItemContextRef } from '../../store/Context-BuyItem'
import SingleBuyingItem from './SingleBuyingItem';

const BuyingList = () => {
  const {buyingItemList} = useContext(ItemContextRef);
 /*  console.log(buyingItemList, 'buyingItemList') */
  return (
    <div>
      {buyingItemList.map((item) => (
        <SingleBuyingItem key={item.id} product={item}></SingleBuyingItem>
      ))}
    </div>
  )
}

export default BuyingList