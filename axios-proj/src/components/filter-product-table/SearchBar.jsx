import React, { useState } from 'react'

const SearchBar = () => {
  const[prodctSearch, setProdctSearch]  = useState("");
  const[isInStock, setIsInStock]  = useState(false)
  return (
    <>
    <form>
    <input type='text' value={prodctSearch} onChange={(e) => setProdctSearch(e.target.value)}/>
        <label>
            <input type='checkbox' checked={isInStock} onChange={(e) => setIsInStock(e.target.checked)}/>
            Only show products in stock
        </label>
    </form>
    </>
  )
}

export default SearchBar