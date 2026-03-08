import React from "react";
import { useState } from "react";
import AnimeCard from "./AnimeCard";
import SearchBar from "./SearchBar";
const Home = () => {
  const anime = [
    { id: 1, name: "One Piece", release: 1999, url:"https://picsum.photos/200/300" },
    { id: 2, name: "Naruto", release: 2002, url:"https://picsum.photos/200/300"},
    { id: 3, name: "Bleach", release: 2004, url:"https://picsum.photos/200/300"},
  ];
  const [searchQuery, setSearchQuery] = useState("");
  const filtered_anime = anime.filter((a) =>
    a.name.toLowerCase().startsWith(searchQuery.toLowerCase()),
  );
  return (
    <>
      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <div className="grid grid-cols-7 gap-6">
        {" "}
        {filtered_anime.map((a) => (
          <AnimeCard anime={a} key={a.id} />
        ))}{" "}
      </div>
    </>
  );
};

export default Home;
