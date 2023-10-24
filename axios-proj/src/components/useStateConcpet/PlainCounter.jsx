import React, { useState } from 'react'
import BucketList from './BucketList';
import ObjectUpdate from './ObjectUpdate';

let nextId = 0;
const initialArtists = [
  { id: 0, title: 'Big Bellies', seen: false },
  { id: 1, title: 'Lunar Landscape', seen: false },
  { id: 2, title: 'Terracotta Army', seen: true },
];

const PlainCounter = () => {
  const[count, setCount] = useState(0);
  const [textInput, setTextInput] = useState('Hello');
  const [checkVal, checkValSet] = useState(false);
  const [person, setPerson] = useState({
    name: 'Nikir de palahe',
    artwork: {
      image: 'https://i.imgur.com/Sd1AgUOm.jpg',
      title: 'Blue Sea',
      city: 'Hamburg'
    }
  });

  const[name, setName] = useState('');
  const [artist, setArtist] = useState([]);
   
  const[counters, setCounters] = useState([0,0,0]);
  const[insertNewVal, setInsertNewVal] = useState('');
  const [insertValList, setInsertValList] = useState([]);

  const[myArtBucketList, setMyArtBucketList] = useState(initialArtists);
  const [yourArtBucketList, setYourArtBucketList] = useState(initialArtists);

  function handleToggleMyList(artworkId, nextItem){
    setMyArtBucketList(myArtBucketList.map((item) => {
      if(item.id === artworkId){
        return {...item, seen: nextItem};
      } else {
        return item;
      }
    }))
  }

  //for your ref
  //https://react.dev/learn/updating-arrays-in-state#making-other-changes-to-an-array
/*   You can use the ... object spread syntax so that you don’t need to copy every property 
separately.

setPerson({
  ...person, // Copy the old fields
  firstName: e.target.value // But override this one
}); */

  function handleToggleYourList(artworkId, checkStatus){
    setYourArtBucketList(yourArtBucketList.map((item) => {
      if(item.id === artworkId){
        return {...item, seen : checkStatus};
      } else{
        return item
      }
    }))
  }

  function addName(){
    setArtist([
      {id: nextId++, name: name},
      ...artist
    ])
    setName('');
  }

  function addValInBetween() {
    //setInsertValList([...insertValList, {id: nextId++, text:insertNewVal}])
    const insertAt = 1;
    const newInsertList = [
       // Items before the insertion point:
      ...insertValList.slice(0, insertAt),
      // The inserted item:
      {id: nextId++, text:insertNewVal},
      // All items after the insertion point (inserted at index `insertAt`):
      ...insertValList.slice(insertAt)
    ]; 
    setInsertValList(newInsertList)
    setInsertNewVal('');
  }

  function handleIncrementClick(index){
    console.log(index, 'index')
    //setCounters((currentCount) => currentCount + 1);
    const nextCounters = counters.map((item, i) => {
      console.log(i, 'nextCounters index');
     /*  console.log(item); */
    if(index === i) {
      return item + 1;
    } else{
      return item;
    }
   });
   setCounters(nextCounters);
  }

  return (
    <div> 
        <button onClick={() => setCount((a) => a + 1)}>You click me {count}</button>
        <div>
            <input value={textInput} onChange={(e) => setTextInput(e.target.value)}/>
            <p>You typed : {textInput}</p>
            <button onClick={() => setTextInput('Hello')}>Reset</button>
        </div>
        <hr />
        <div>
            <label>You like this <input type='checkbox' checked={checkVal} onChange={() => checkValSet((currentVal) => !currentVal)}/> </label>
            <p>{!checkVal ? "You did not like this." : 'You liked this'}</p>
        </div>
        <hr />
        <div>
        <p>{person.name}</p>
        <p>{person.artwork.city}</p>
        <p>{person.artwork.image}</p>
        <p>{person.artwork.title}</p>
        </div>

<button onClick={() => setPerson({
  ...person, // Copy existing fields
  artwork: { // but replace the artwork
    ...person.artwork, // with the same one
    city: 'New Delhi' // but change the old one with New Delhi!
  }
})}>change person</button>

<hr></hr>
      <h2>Adding to an array </h2>
      <input value={name} onChange={(e) => setName(e.target.value)}/>
      <button style={{marginLeft: '10px'}} onClick={() =>addName()}>Add</button>
      {artist && artist.map((item) => 
      <p key={item.id}>
        {item.name} <button onClick={() => setArtist(artist.filter((currentArticst) => currentArticst.id !== item.id))}>Delete</button>
        </p>)}

      <hr/> 
      <div>
      <h2>Replacing items in an array</h2>
      {counters.map((item, index) => <div key={index}>{item} <button onClick={() => handleIncrementClick(index)}>+1</button></div>)}
      </div>
      
      <hr></hr>

      <div>
        <h3> Add new item</h3>
        <input value={insertNewVal} onChange={(e) => setInsertNewVal(e.target.value)}/>
        <button onClick={() => addValInBetween()}>Insert</button>
        <ul id="list">
          {insertValList.map((item) => (
            <li key={item?.id}>{item?.text}</li>
          ))}
        </ul>
      </div>
           <hr></hr>

      <div>
            <h3>Art Bucket List</h3>
            <h6>My list of art to see:</h6>
            <ul id="myArt">
              {/* {myArtBucketList.map((item) => (
                <li key={item.id}>
                  <label><input type="checkbox" checked={checkVal} onChange={() => checkValSet((currentVal) => !currentVal)}/>{item.text}</label>
                </li>
              ))} */}
              <BucketList artworks={myArtBucketList} onToggle={handleToggleMyList}/>
              <BucketList artworks={yourArtBucketList} onToggle={handleToggleYourList} />
            </ul>
      </div> 
      <hr></hr>
      <div>
        <h2> Form (object) </h2>
        <ObjectUpdate></ObjectUpdate>
        </div>     

    </div>
  )
}

export default PlainCounter