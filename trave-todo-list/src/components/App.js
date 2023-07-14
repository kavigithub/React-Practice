import { useState } from 'react';
import './App.css';
import Logo from './Logo';
import Form from './Form';
import PackingList from './PackingList';
import Stats from './Stats';

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

  const handelDeleteItem = (id) => {
    setItem((items) => items.filter((item) => item.id !== id))
  }

  const handleToggleCheck = (id) => {
    setItem(items => items.map((item) => item.id === id ? {...item, packed: !item.packed} : item));
  }

  const handleClearItems = () => {
    const confirmedMsg = window.confirm('Are u sure u want to delete these items?');

    if(confirmedMsg) setItem([])
  }
  
  return (
    <div className="App">
        <Logo />
        <Form handleAddItem={handleAddItem}/>
        <PackingList itemData={item} onDeleteItem={handelDeleteItem} onToggleItem={handleToggleCheck} onHandleClearList={handleClearItems}/>
        <Stats item={item}/>
    </div>
  );
}

export default App;
