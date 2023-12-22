import React,{useState} from 'react';

const ItemPlaceholder = ({onHandleChangeForm}) => {
    const [inputBuyingItem, setInputBuyingItem] = useState('');
    const [inputBuyingDate, setInputBuyingDate] = useState('');

  return (
    <form action='' onSubmit={(e) => {
        onHandleChangeForm(e, inputBuyingItem, inputBuyingDate);
        setInputBuyingItem('');
        setInputBuyingDate('');
    }}>
        <h2>Add Your Item</h2>
        <div className="row mb-4">
        <div className="col">
            <input type="text" className="form-control" placeholder="add items" aria-label="add items" value={inputBuyingItem} onChange={(e) => 
                setInputBuyingItem(e.target.value)}/>
        </div>
        <div className="col">
            <input type="date" className="form-control" placeholder="date" aria-label="add date" value={inputBuyingDate} onChange={(e) => setInputBuyingDate(e.target.value)}/>
        </div>
        <div className="col">
        <button type="submit" className='btn btn-primary m-0'>Submit</button>
        </div>
        </div>
    </form>
  )
}

export default ItemPlaceholder