import React, { useState } from "react";
import ItemPlaceholder from "./ItemPlaceholder";
import WelcomMessage from './WelcomMessage'
import BuyingList from "./BuyingList";


const BuyingItem = () => {
  const [buyingItemList, setBuyingItemList] = useState([]);

  const onHandleChangeForm = (e, inputBuyingItem, inputBuyingDate) => {
    e.preventDefault();
    let newItemAdd = {
      title: inputBuyingItem,
      date: inputBuyingDate,
      done: false,
      id: crypto.randomUUID(),
    };
    //setBuyingItemList([...buyingItemList, newItemAdd]);
    setBuyingItemList((prevItem) => [...prevItem, {
      title: inputBuyingItem,
      date: inputBuyingDate,
      done: false,
      id: crypto.randomUUID(),
    }])
    console.log(buyingItemList);
  };

  const onHandleDelete = (deleteItemId) => {
    setBuyingItemList(
      buyingItemList.filter((item) => item.id !== deleteItemId)
    );
  };

  const onHandleEdit = (editItem) => {
    setBuyingItemList(buyingItemList.map((item) => {
        if(item.id === editItem.id){
            return editItem;
        } else{
            return item;
        }
    }));
  };

  return (
    <div>
      <ItemPlaceholder onHandleChangeForm={onHandleChangeForm} />
      <WelcomMessage buyingItemList={buyingItemList}/>
      <BuyingList
        buyingItemList={buyingItemList}
        handleDelete={onHandleDelete}
        handleEdit={onHandleEdit}
      ></BuyingList>
    </div>
  );
};

export default BuyingItem;
