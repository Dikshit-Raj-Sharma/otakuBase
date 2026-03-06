import React from "react";

const AnimeCard = ({ animeList }) => {
  return (
    <>
      <div>
        <img src={animeList.url} alt={animeList.name} />
        <div>
          <button>♥</button>
        </div>
      </div>
      <div>
        <h3>{animeList.name}</h3>
        <p>{animeList.release}</p>
      </div>
    </>
  );
};

export default AnimeCard;
