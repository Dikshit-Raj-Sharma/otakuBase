import React from 'react'
import { useState } from 'react';
const SearchBar = ( {searchQuery, setSearchQuery} ) => {
  return (
    <>
        <input 
            name= "anime-name"
            placeholder= "Search Anime"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
        />
    </>
  )
}

export default SearchBar