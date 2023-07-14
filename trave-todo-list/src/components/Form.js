import { useState } from "react";
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

  export default Form;