import { useState } from 'react';
import './App.css';

const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: false },
  { id: 3, description: "Charger", quantity: 1, packed: true },
]; 

function App() {
  const [item, setItem] = useState([]);

  const handleAddItem = (newItemAdd) => {
    setItem((item) => [...item, newItemAdd]);
  }

  const handleDeleteItem = (id) => {
    //setItem(item => item.id !== id);
    setItem(items => items.filter((item) => item.id !== id))
  }

  const handelToggleItem = (id) => {
    setItem(items => items.map((item) => item.id === id ? {...item, packed: !item.packed} : item))
  }
  
  return (
    <div className="App">
        <Logo />
        <Form  handleAddItem={handleAddItem}/>
        <PackingList itemData={item} onDeleteItem={handleDeleteItem} onCheckItem={handelToggleItem}/>
        <Stats />
    </div>
  );
}

const Logo = () => {
  return(
    <>
      <h1>🏖️ BAG PACK ✈️ PACK BAGS 🏕️ </h1>
    </>
  )
}

const Form = ({handleAddItem}) => {
  const [description, setDescription] = useState('');
  const [quantity, setQuantity] = useState(1);
  /* const [item, setItem] = useState([]); ....array hi kyu chahiye

  const handleAddItem = (newItemAdd) => {
    setItem((item) => [...item, newItemAdd]);
  } */

  const handleSubmit = (e) => {
    e.preventDefault();

    if(!description) return;

    const newObj = {description, quantity, packed: false, id: Date.now()}
    handleAddItem(newObj);

    setDescription('');
    setQuantity(1);
  }

  return(
    <>
      <form className='add-form' onSubmit={handleSubmit}>
        <h3>What you need for Trip?</h3>
        <select value={quantity} onChange={(e) => setQuantity(Number(e.target.value))}>
          {Array.from({length: 20}, (_, index) => index + 1).map((num) => (
            <option key={num} value={num}>{num}</option>
          ))}
        </select>
        <input type='text' placeholder='Item...' value={description} onChange={(e) => setDescription(e.target.value)}/>
        <button>Add</button>
      </form>
    </>
  )
}

const PackingList = ({itemData, onDeleteItem, onCheckItem}) => {
  return(
    <div className='list'>
      <ul>
        {itemData.map((item) => <ItemList key={item.id} listofItem={item} onDeleteItem={onDeleteItem} onCheckItem={onCheckItem}/>)}
      </ul>
    </div>
  )
}

const ItemList = ({listofItem, onDeleteItem, onCheckItem}) => {
  return(
    <li>
      <input type='checkbox' value={listofItem.packed} onChange={() => onCheckItem(listofItem.id)}/>
      <span style={listofItem.packed ?  {textDecoration: 'line-through'} : {}}>
      {listofItem.quantity} : {listofItem.description}
      </span>
      <button onClick={() => onDeleteItem(listofItem.id)}>❌</button>
    </li>
  )
  }
      
const Stats = () => {
  return(
    <>
      <footer className='stats'>
        <em>You have items on your list, And you already packed</em>
      </footer>
    </>
  )
}

export default App;
