import React, { useState } from 'react'

const SearchTodo = () => {
 const [searchText, setSearchText] = useState('');   
  return (
    <div>
        <input type="text" placeholder="Search Todo..." value={searchText} onChange={(e) => setSearchText(e.target.value)}/>
    </div>
  )
}

export default SearchTodo