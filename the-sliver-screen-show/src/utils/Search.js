import React, { useEffect, useRef } from 'react'
import { useKey } from '../hooks/useKey';

const Search = ({query, setQuery}) => {
  const inputElm = useRef("");  

  //custom hook
  useKey('Enter', function(){
    if(document.activeElement === inputElm.current) return;
    inputElm.current.focus();
    setQuery("");
  });

  //look custom hook code above
  /* useEffect(() => {
    const callBack = (e) => {
      if(document.activeElement === inputElm.current) return;

      if (e.code === 'Enter'){
        //inputElm.current //dom element itself
        inputElm.current.focus();
        setQuery("");
      }
    }

    document.addEventListener('keydown', callBack);
    inputElm.current.focus();

    return () => {
      document.removeEventListener("keydown", callBack);
    }; 
  }, [setQuery]); */

  return (
   <>
    <input
          className="search"
          type="text"
          ref={inputElm}
          placeholder="Search movies..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
   </>
  )
}

export default Search