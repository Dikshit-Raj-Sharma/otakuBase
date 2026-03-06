import React from "react";
import { useState } from "react";
import AnimeCard from "./AnimeCard";
import SearchBar from "./SearchBar";
const Home = () => {
  const anime = [
    { id: 1, name: "One Piece", release: 1999 },
    { id: 2, name: "Naruto", release: 2002 },
    { id: 3, name: "Bleach", release: 2004 },
  ];
  const [searchQuery, setSearchQuery] = useState("");
  const filtered_anime = anime.filter((a) =>
    a.name.toLowerCase().startsWith(searchQuery.toLowerCase()),
  );
  return (
    <>
      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <div>
        {" "}
        {filtered_anime.map((a) => (
          <AnimeCard animeList={a} key={a.id} />
        ))}{" "}
      </div>
    </>
  );
};

export default Home;
