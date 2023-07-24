import React, { useState } from "react";
import Button from "./Button";

const FormAddPeople = ({ isVisibleAddForm, addPeopleList }) => {
    const [name, setName] = useState('');
    const [imgUrl, setImgUrl] = useState('https://i.pravatar.cc/48?u=');

    const handleSubmit = (e) => {
        e.preventDefault();

        if(!name || !imgUrl) return;

        const id= crypto.randomUUID();
        const newPeople = {
            name,
            id,
            image: `${imgUrl}?=${id}`,
            balance: 0
        }

        console.log(newPeople);
        addPeopleList(newPeople);

        setName('');
        setImgUrl('https://i.pravatar.cc/48?u=');
        
    }

  return (
    <>
      {isVisibleAddForm && (
        <form className="form-add-friend" onSubmit={handleSubmit}>
          <label>People Name</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)}/>

          <label>Image URL</label>
          <input type="text" value={imgUrl} onChange={(e) => setImgUrl(e.target.value)}/>

          <Button>Add</Button>
        </form>
      )}
    </>
  );
};

export default FormAddPeople;
