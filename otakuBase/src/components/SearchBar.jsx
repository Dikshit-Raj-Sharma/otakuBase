
const SearchBar = ( {searchQuery, setSearchQuery, onSearch} ) => {
  const handleSearch=(e)=>{
    e.preventDefault();
    onSearch();
  }
  return (
    <div className="flex items-center justify-center m-4">
        <form onSubmit={handleSearch} className="flex gap-2">
          <input
              name= "anime-name"
              placeholder= "Search Anime"
              value={searchQuery}
              className="p-4 text-xl border-blue-900 border-2 rounded-lg w-full max-w-md focus:ring-2 focus:ring-blue-500"
              onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button className="ml-2 px-6 py-4 bg-blue-900 hover:bg-blue-800 text-white font-bold rounded-lg transition-colors">Search</button>
        </form>
    </div>
  )
}

export default SearchBar