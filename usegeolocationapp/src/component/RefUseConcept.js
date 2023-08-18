import React, { useEffect, useRef, useState } from 'react'

const RefUseConcept = () => {
    const[typeTxt, setTypeTxt] = useState('');
    const renderValue = useRef(0);
    const inputRef = useRef();
    const prevText = useRef('');

    useEffect(() => {
        renderValue.current = renderValue.current + 1;
        prevText.current = typeTxt;
    }, [typeTxt]);

    const focusFunc = () => {
        inputRef.current.focus();
    }

  return (
    <div>
        <input  type='text' value={typeTxt} onChange={(e) =>setTypeTxt(e.target.value)}/>
       {/*  <input ref={inputRef} type='text' onChange={(e) =>setTypeTxt(e.target.value)}/> */}
        <p>I am typeing {typeTxt} and my previous text was {prevText.current}</p>
        <p>U changes me {renderValue.current}</p>
        <button onClick={focusFunc}>Focus</button>
    </div>
  )
}

export default RefUseConcept