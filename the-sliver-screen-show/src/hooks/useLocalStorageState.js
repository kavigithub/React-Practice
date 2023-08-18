import {useState, useEffect} from 'react'

export const useLocalStorageState = (initialState, key) => {
      //based on function(lazy evoluation)
  //function must be pure...accept no arguments...call only on initial re
  const [value, setValue] = useState(function(){
    const storedValue = localStorage.getItem(key);
    return storedValue ? JSON.parse(storedValue) :  initialState;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value))
  }, [key, value]);

  return [value, setValue]

}
