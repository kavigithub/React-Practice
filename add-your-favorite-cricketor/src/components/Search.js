import React, { useState } from 'react'

const Search = ({filteredCricketer, handleChange}) => {

  return (
    <div className="mb-3">
        <input type="text" value={filteredCricketer} onChange={(e) => handleChange(e.target.value)} className="form-control" placeholder="serach your fav cricketer" />
    </div>
  )
}

export default Search