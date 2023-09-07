import React from 'react'
import { useState } from 'react'

const UpdateObjState = () => {
    const [person, setPerson] = useState({
        name: 'Niki de Saint Phalle',
        title: 'Blue Nana',
        city: 'Hamburg',
        artwork: {
            title: 'Blue Nana',
            city: 'Hamburg',
            image: 'https://i.imgur.com/Sd1AgUOm.jpg',
          }
    });


    function handleChangeName(e) {
        setPerson({
          ...person,
          name : e.target.value
        })
      }

      function handleChangeTitle(e) {
        setPerson({
          ...person,
          title : e.target.value
        })
      }

      function handleArtworkTitle(e){
        setPerson({
            ...person,
            artwork: {
                ...person.artwork,
                title: e.target.value
            }
        })
      }

      function handleArtWorkCity(e){
        setPerson({
            ...person,
            artwork: {
                ...person.artwork,
                city: e.target.value
            }
        })
      }


  return (
    <div>
      <h6>Form (nested object) </h6>
              <label>
        First name:
        <input
          value={person.name}
          onChange={handleChangeName}
        />
      </label>

        <label>
            Title:   <input
          value={person.title}
          onChange={handleChangeTitle}
        />
        </label>

        <label>
            Artwork Title:
            <input value={person.artwork.title} onChange={handleArtworkTitle}/>
        </label>

        <label>
            Artwork City:
            <input value={person.artwork.city} onChange={handleArtWorkCity}/>
        </label>

        <img alt={person.artwork.title} src={person.artwork.image} style={{width:100, height:100}} />

        <p>{person.name} | {person.artwork.title} | {person.artwork.city}</p>

        <hr></hr>
        
    </div>
  )
}

export default UpdateObjState