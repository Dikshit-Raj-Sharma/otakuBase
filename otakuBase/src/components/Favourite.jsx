import { useAnimeContext } from "../context/AnimeContext";
import AnimeCard from "./AnimeCard";

const Favourite = () => {
  const { favourites } = useAnimeContext();

  if (favourites.length === 0)
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="p-4 text-xl">Currently No Favourites Added...</p>
      </div>
    );
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 p-4">
      {favourites.map((fav) => {
        return <AnimeCard anime={fav} key={fav.mal_id}></AnimeCard>;
      })}
    </div>
  );
};

export default Favourite;
