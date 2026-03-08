import React from "react";

const AnimeCard = ({ anime }) => {
  return (
    <div>
      <div>
        <img src={anime.url} alt={anime.name} className="w-full h-80 object-cover" />
        <div>
          <button>♥</button>
        </div>
      </div>
      <div>
        <h3>{anime.name}</h3>
        <p>{anime.release}</p>
      </div>
    </div>
  );
};

export default AnimeCard;
