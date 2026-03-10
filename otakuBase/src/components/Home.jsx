import React from "react";
import { useState, useEffect } from "react";
import AnimeCard from "./AnimeCard";
import SearchBar from "./SearchBar";

import { getTrendingAnime } from "../services/api.js";
const Home = () => {
  const [anime, setAnime] = useState([]);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState(null);

  const loadAnime = async () => {
    try {
      setLoading(true);
      const data = await getTrendingAnime();
      setAnime(data);
      setErr(null);
    } catch (error) {
      setErr("Failed to load anime. Please try again later.");
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    loadAnime();
  }, []);
  const [searchQuery, setSearchQuery] = useState("");
  const filtered_anime = anime.filter((a) =>
    a.title.toLowerCase().startsWith(searchQuery.toLowerCase()),
  );
  if (loading) return <div className="min-h-[calc(100vh-90px)] flex items-center justify-center text-xl">Loading Anime...</div>;
  if (err) return <div className="p-4 text-xl text-red-500">Error: {err}</div>;
  return (
    <>
      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 p-4">
        {" "}
        {filtered_anime.map((a) => (
          <AnimeCard anime={a} key={a.mal_id} />
        ))}{" "}
      </div>
    </>
  );
};

export default Home;
