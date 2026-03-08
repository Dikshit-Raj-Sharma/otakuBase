import React from 'react'
const SearchBar = ( {searchQuery, setSearchQuery} ) => {
  return (
    <div className="flex items-center justify-center m-4">
        <input 
            name= "anime-name"
            placeholder= "Search Anime"
            value={searchQuery}
            className="p-4 text-xl rounded-lg w-full max-w-md"
            onChange={(e) => setSearchQuery(e.target.value)}
        />
    </div>
  )
}

export default SearchBar