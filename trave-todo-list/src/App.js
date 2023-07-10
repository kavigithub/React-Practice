import { useState } from 'react';
import './App.css';

const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: false },
  { id: 3, description: "Charger", quantity: 1, packed: true },
];

function App() {
  return (
    <div className="App">
        <Logo />
        <Form />
        <PackingList />
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

const Form = () => {
  const [disciprtion, setDisciprtion] = useState("");
  const [quantity, setQuantity] = useState(1);
  const handleSubmit = (e) => {
    e.preventDefault();
    if(!disciprtion) return;

    const newItem = {disciprtion, quantity, packed: false, id: Date.now()}
    console.log(newItem);

    setDisciprtion('');
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
        <input type='text' placeholder='Item...' value={disciprtion} onChange={(e) => setDisciprtion(e.target.value)} />
        <button>Add</button>
      </form>
    </>
  )
}

const PackingList = () => {
  return(
    <div className='list'>
      <ul>
        {initialItems.map(item => (
          <>
            <li><ItemList listofItem={item} key={item.id}/></li>
          </>
        ))}
      </ul>
    </div>
  )
}

const ItemList = ({listofItem}) => {
  return(
    <>
      <span style={listofItem.packed ? {textDecoration: 'line-through'} : {}}>
        {listofItem.description}
        {listofItem.quantity}
      </span>
      <button>❌</button>
    </>
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
