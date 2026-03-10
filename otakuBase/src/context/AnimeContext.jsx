import { createContext, useState, useEffect, useContext } from "react";

const AnimeContext = createContext(null);

export const AnimeContextProvider = ({ children }) => {
  const [favourites, setFavourites] = useState(() => {
    const favAnime = localStorage.getItem("fav-anime");
    if (favAnime) {
      const json = JSON.parse(favAnime);
      return json;
    }
    return [];
  });

  useEffect(() => {
    localStorage.setItem("fav-anime", JSON.stringify(favourites));
  }, [favourites]);

  function addToFavourites(anime) {
    setFavourites((prev)=>[...prev, anime]);
  }
  function removeFromFavourites(anime_id){
    setFavourites((prev)=>prev.filter(a=>a.mal_id!==anime_id));
  }
  function isFavourite(anime_id){
    return favourites.some((a)=>anime_id===a.mal_id)
  }
  const value = {
    favourites,
    addToFavourites,
    removeFromFavourites,
    isFavourite

  };

  return (
    <AnimeContext.Provider value={value}>{children}</AnimeContext.Provider>
  );
};

export const useAnimeContext = () => {
  const context = useContext(AnimeContext);
  if (!context) throw new Error("Something went wrong :/");
  return context;
};
