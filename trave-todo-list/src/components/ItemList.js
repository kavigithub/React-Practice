const ItemList = ({listofItem, onDeleteItem, onToggleItem}) => {
    return(
      <li>
        <input type='checkbox' value={listofItem.packed} onChange={() => onToggleItem(listofItem.id)}/>
        <span style={listofItem.packed ?  {textDecoration: 'line-through'} : {}}>
        {listofItem.quantity} : {listofItem.description}
        </span>
        <button onClick={() => onDeleteItem(listofItem.id)}>❌</button>
      </li>
    )
  }

 export default ItemList; 