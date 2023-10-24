import React, { useState } from 'react'

const ObjectUpdate = () => {
    const[formVal, setFormVal] = useState({
        firstname: 'Vigaro',
        lastname: 'Laviosa',
        email: 'abc@gmail.come',
        artwork: {
            title: 'Blue Nana',
            city: 'Hamburg',
            image: 'https://i.imgur.com/Sd1AgUOm.jpg',
          }
    })

    function changeTitle(e){
        setFormVal({
            ...formVal,  //spread operator to copy the object and add new property or update existing one
           artwork: {
            ...formVal.artwork,   //spread operator to copy the object and add new property or update existing one
            title: e.target.value
           }
        })
    }

    function changeCity(e){
        setFormVal({
            ...formVal,
            artwork: {
                ...formVal.artwork,   //spread operator to copy the object and add new property or update existing one
                city: e.target.value
            }
        })
    }

   /*  function changeVal(e){
        setFormVal(() => e.target.value);
    } */
  return (
    <div>
        <form>
            <label htmlFor="firstname">First Name:</label><br />
            <input type="text" id="firstname" value={formVal.firstname} onChange={(e) => setFormVal({...formVal, firstname:e.target.value})}/><br /><br/>
            <label htmlFor="lastname">Last Name:</label><br />
            <input type="text" id="lastname" value={formVal.lastname} onChange={(e) => setFormVal({...formVal, lastname: e.target.value})}/><br /><br/>
            <label htmlFor='email'>Email</label><br />
            <input type="text" id='email' value={formVal.email} onChange={(e) => setFormVal({...formVal, email: e.target.value})}/><br /><br/>
            <p>we can do it in another way now</p>
            <label htmlFor='title'>Artwork Title</label>
            <input type='text' name='artworkTitle' value={formVal.artwork.title} onChange={e=> changeTitle(e)} /><br /><br/>
            <label htmlFor='city'>City</label>
            <input type='text' name='artworkCity' value={formVal.artwork.city} onChange={(e) => changeCity(e)} /><br /><br/>
        </form>
        <p>FirstName: {formVal.firstname}</p>
        <p>LastName: {formVal.lastname}</p>
        <p>Email: {formVal.email}</p>
        <p>Artwork Title: {formVal.artwork.title}</p>
        <p>Artwork City: {formVal.artwork.city}</p>
    </div>
  )
}

export default ObjectUpdate