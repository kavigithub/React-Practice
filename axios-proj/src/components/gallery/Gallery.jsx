import React, { useState } from 'react';
import {sculptureList} from './data';
import Button from './Button';

const Gallery = () => {
  const [listIndex, setListIndex] = useState(0);
  const [showDetails, setShowDetails] = useState(false);  
  let showSingleSculpture = sculptureList[listIndex];

  let isIndexStart = listIndex <= 0 ;
  let isIndexEnd = listIndex >= sculptureList.length - 1;
   
  function handleNextSculpture(){
        setListIndex((current) => current+1);
  }

  function handleDetails(){
    setShowDetails((currentShow) => !currentShow);
  }

  function handlePrevSculpture(){
        setListIndex((prev) => prev-1);
  }

  return (
    <div>
      {/*   {
            sculptureList.map((item, index) => (<ListItem key={item.name} item={item} index={index}/>))
        } */}
             <Button disabled={isIndexStart} nextSculpture={handlePrevSculpture}>Prev</Button>
        <Button disabled={isIndexEnd} nextSculpture={handleNextSculpture}>Next</Button>  
   
        <h4>{showSingleSculpture?.name} : {showSingleSculpture?.artist}</h4>
        <p>{listIndex + 1} of {sculptureList.length}</p>
        <img alt={showSingleSculpture?.alt} src={showSingleSculpture?.url}/>
        <br></br>
        <Button nextSculpture={handleDetails}>{showDetails ? 'Hide' : 'Show'} Details</Button>
        <p>{showDetails && showSingleSculpture?.description}</p>
    </div>
  )
}

export default Gallery