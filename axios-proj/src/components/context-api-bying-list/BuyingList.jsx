import React, { useContext } from 'react';
import SingleBuyingItem from './SingleBuyingItem';
import { ItemContextRef } from '../../store/Context-BuyItem';

/* let data = [
    { id: 0, title: 'Buy milk', date:'05/12/2023', done: true },
    { id: 1, title: 'Eat tacos', date:'05/12/2023', done: false },
    { id: 2, title: 'Brew tea', date:'05/12/2023', done: false },
  ] */

const BuyingList = () => {

  const {buyingItemList} = useContext(ItemContextRef);
  console.log(buyingItemList);
  
  return (
    <div>
        <ul>
            {buyingItemList.map((item) => (
                <SingleBuyingItem key={item.id} product={item} />
            ))}
        </ul>
    </div>
  )
}

export default BuyingList