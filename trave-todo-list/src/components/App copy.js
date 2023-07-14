import { useState } from 'react';
import './App.css';

/* const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: false },
  { id: 3, description: "Charger", quantity: 1, packed: true },
]; */

function App() {
  const [items, setItems] = useState([]);
  const handleAddItems = (newItem) => {
    //console.log(newItem)
    setItems((item) => [...item, newItem]);
    console.log(items);
  }
  return (
    <div className="App">
        <Logo />
        <Form onAddItems={handleAddItems} />
        <PackingList addItems={items}/>
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

const Form = ({ onAddItems }) => {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);
  
  /* const handleAddItems = (newItem) => {
    //console.log(newItem)
    setItems((item) => [...item, newItem]);
    console.log(items);
  } */

  const handleSubmit = (e) => {
    e.preventDefault();

    //if(!discription) return;

    const newItem = { description, quantity, packed: false, id: Date.now() };
    //console.log(newItem);
    onAddItems(newItem);

    setDescription('');
    setQuantity(1);
  }

  return(
    <>
      <form className='add-form' onSubmit={handleSubmit}>
        <h3>What you need for Trip?</h3>
        <select value={quantity} onChange={(e) => setQuantity(Number(e.target.value))}>
          {Array.from({length: 20}, (_, index) => index + 1).map((num) => (
          <option value={num} key={num}> {num}</option>
          ))}
        </select>
        <input type='text' placeholder='Item...' value={description} onChange={(e) => setDescription(e.target.value)} />
        <button>Add</button>
      </form>
    </>
  )
}

const PackingList = ({addItems}) => {
  return(
    <div className='list'>
      <ul>
        {addItems.map(item => (
          <>
            <ItemList listofItem={item} key={item.id}/>
          </>
        ))}
      </ul>
    </div>
  )
}

const ItemList = ({listofItem}) => {
  return(
    <li key={listofItem.id}>
      <span style={listofItem.packed ? {textDecoration: 'line-through'} : {}}>
      {listofItem.quantity} {listofItem.description}
      </span>
      <button>❌</button>
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
