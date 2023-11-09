import React, { useState } from 'react';
import CompWithHOC from './CompWithHOC';

export const Item1 = () => {
   const [cost, setCost] = useState(10);

   let handleCost = () => {
    setCost(cost + 10);
   }
  return (
    <div>
        <h1>{cost}</h1>
        <button onClick={handleCost}>Increase Cost</button>
    </div>
  )
}

export const Item2 = () => {
    const [cost, setCost] = useState(10);
 
    let handleCost = () => {
     setCost(cost + 10);
    }
   return (
     <div>
         <h1>{cost}</h1>
         <button onClick={handleCost}>Increase Cost</button>
     </div>
   )
 }
 
const Item3 = ({cost, handleCost}) => {
    return (
        <div>
            <h1>{cost}</h1>
            <button onClick={handleCost}>Increase Cost</button>
        </div>
      )
 }

 export default CompWithHOC(Item3);
