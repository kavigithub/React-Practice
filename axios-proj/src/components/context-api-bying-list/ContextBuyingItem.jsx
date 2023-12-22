import React, { useContext, useEffect, useState } from "react";
import ItemPlaceholder from "./ItemPlaceholder";
import WelcomMessage from './WelcomMessage'
import BuyingList from "./BuyingList";
import { ItemContextRef, ThemeContext } from "../../store/Context-BuyItem";


const ContextBuyingItem = () => {

  const [buyingItemList, setBuyingItemList] = useState([]);
  const [theme, setTheme] = useState(null);
 const themeClass = useContext(ThemeContext)

  useEffect(() => {
    setTheme(themeClass)
  }, [themeClass]);

  const onAddItem = (e, inputBuyingItem, inputBuyingDate) => {
    e.preventDefault();
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
      <ThemeContext.Provider value={theme}>
        <div className={theme}>
          <ItemContextRef.Provider value={{
            buyingItemList,
            onAddItem,
            onHandleDelete,
            onHandleEdit
          }}>
          <ItemPlaceholder />
          <WelcomMessage />
          <BuyingList />
          </ItemContextRef.Provider>
        </div>
      </ThemeContext.Provider>
      <button className="btn btn-sm btn-info m-0 mx-1" onClick={() => setTheme(theme === 'bg-dark' ? 'bg-light' : 'bg-dark')}>Toggle</button>
    </div>
  );
};

export default ContextBuyingItem;
