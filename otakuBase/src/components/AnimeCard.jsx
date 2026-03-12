import React from "react";
import { useAnimeContext } from "../context/AnimeContext";

const AnimeCard = ({ anime, showRank }) => {
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
    <div className="border border-gray-700 rounded-lg overflow-hidden bg-gray-800 flex flex-col shadow-lg group">
      <div className="relative">
        <img
          src={anime.images?.jpg?.image_url}
          alt={anime.title}
          className="w-full h-80 object-cover group-hover:scale-107 transition-transform duration-300"
        />
        {/* {anime.rank && (
          <div className="absolute top-2 left-2 bg-slate-900 bg-opacity-80 text-white font-bold px-3 py-1 rounded-md text-sm border border-gray-600">
            #{anime.rank}
          </div>
        )} */}
        { showRank && anime.rank && (
          <div className="absolute top-2 left-2 bg-slate-900 bg-opacity-80 text-white font-bold px-2 py-1 rounded-md text-sm border border-gray-600">
            #{anime.rank}
          </div>
        )}
        <div className="absolute top-2 right-2">
          <button onClick={handleFavourite} className={`text-4xl rounded-full transition ${favourite? "text-red-500" : "text-white hover:text-red-300"}`}>♥</button>
        </div>
      </div>
      <div className="flex flex-col flex-grow p-4">
        <h3 className=" flex font-bold text-lg mb-1 line-clamp-2">
          {anime.title}
        </h3>

        <div className="flex justify-between items-center mt-auto pt-2 text-sm text-gray-400">
          <p className="text-gray-400 text-sm mt-auto">{anime.year || "N/A"}</p>
          
          {anime.score && (
            <p className="text-yellow-400">
              ★ {anime.score}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default AnimeCard;
