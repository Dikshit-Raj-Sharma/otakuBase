import React from "react";
import { useAnimeContext } from "../context/AnimeContext";

const AnimeCard = ({ anime }) => {
  const { isFavourite, addToFavourites, removeFromFavourites } = useAnimeContext();

  const favourite = isFavourite(anime.mal_id);
  const handleFavourite=(e)=>{
    e.preventDefault();
    if(favourite){
      removeFromFavourites(anime.mal_id);
    }
    else addToFavourites(anime);
    
  }

  return (
    <div className="border border-gray-700 rounded-lg overflow-hidden bg-gray-800 flex flex-col shadow-lg">
      <div className="relative">
        <img
          src={anime.images?.jpg?.image_url}
          alt={anime.title}
          className="w-full h-80 object-cover"
        />
        <div className="absolute top-2 right-2">
          <button onClick={handleFavourite} className={`text-4xl rounded-full transition ${favourite? "text-red-500" : "text-white hover:text-red-300"}`}>♥</button>
        </div>
      </div>
      <div className="flex flex-col flex-grow p-4">
        <h3 className=" flex font-bold text-lg mb-1 line-clamp-2">
          {anime.title}
        </h3>

        <p className="text-gray-400 text-sm mt-auto">{anime.year || "N/A"}</p>
      </div>
    </div>
  );
};

export default AnimeCard;
