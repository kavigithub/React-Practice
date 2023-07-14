import { useState } from "react";
import ItemList from './ItemList'

const PackingList = ({itemData, onDeleteItem, onToggleItem, onHandleClearList}) => {
    const [sortBy, setSortBy] = useState('input');
  
    let sortedItems; //by keeping this variable we are not changeing the original array i.e itemData
  
    if(sortBy === 'input') sortedItems = itemData;
    //itemData.slice() is used to keep the copy of original array
    if(sortBy === 'description') sortedItems = itemData.slice().sort((a, b) => a.description.localeCompare(b.description));
    if(sortBy === 'packed') sortedItems = itemData.slice().sort((a, b) => Number(a.packed) - Number(b.packed));
  
    return(
      <div className='list'>
        <ul>
         {/*  {itemData.map((item) => <ItemList key={item.id} listofItem={item} onDeleteItem={onDeleteItem} onToggleItem={onToggleItem}/>)} */}
         {sortedItems.map((item) => <ItemList key={item.id} listofItem={item} onDeleteItem={onDeleteItem} onToggleItem={onToggleItem}/>)} 
        </ul>
  
        <div className='actions'>
          <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
            <option value="input">Sort by Input Order</option>
            <option value="description">Sort by Description Order</option>
            <option value="packed">Sort by Packed Status</option>ß
          </select>
          <button onClick={onHandleClearList}>CLear List</button>
        </div>
      </div>
    )
  }

  export default PackingList;