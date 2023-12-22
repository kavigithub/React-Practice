import React, { useState } from 'react'

const SingleBuyingItem = ({product, handleDelete, handleEdit}) => {
  const [isEdit, setIsEdit] = useState(false);  
  let editItem;  

  if(isEdit){
    editItem = (
        <>
             <input type="text" className="form-control" placeholder="add items" aria-label="add items" value={product.title} onChange={(e) => handleEdit({...product, title: e.target.value})}/>
             <input type="date" className="form-control" placeholder="date" aria-label="add date" value={product.date} onChange={(e) => handleEdit({
                ...product,
                date:e.target.value
             })}/>
             <button type='button' className="btn btn-sm btn-info m-0 mx-1" value={product.date} onClick={() => setIsEdit(false)}>Save</button>
        </>
    ) 
  } else {
    editItem = (
        <>
        <span>{product.title} </span>
        <span>{product.date}</span>
        <button type='button' className="btn btn-sm btn-info m-0 mx-1" onClick={() => setIsEdit(true)}>Edit</button> 
    </>
    )
  }


  return (
    <div>
       <li className=' pb-2'>
        <span className='mx-1'><input type='checkbox' checked={product.done} onChange={(e) => handleEdit({...product, done: e.target.checked})}/></span> 
        {editItem}
       <button type='button' className="btn btn-sm btn-danger m-0 mx-1" onClick={() => handleDelete(product.id)}>Delete</button>
       </li>
    </div>
  )
}

export default SingleBuyingItem