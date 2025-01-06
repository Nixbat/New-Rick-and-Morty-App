import React, { useState } from 'react'
import "./SearchBar.css"

const SearchBar = ({ onSearch, getRandomCharacter }) => {

  const [id, setId] = useState("");

  const handleChange = (event) => {
    setId(event.target.value);
  }

  return (
    <div className='content-search'>
      <h1>More than 800 characters, find your favorite</h1>
      <div className='search-form'>
        <input type="search" onChange={handleChange} placeholder='Search character...' />
        <button onClick={() => onSearch(id)}>Search</button>
      </div>

      <div className='random-button'>
      <button onClick={getRandomCharacter} className='btn-random'>Random character</button>
      </div>          
    </div>
  )
};

export default SearchBar;