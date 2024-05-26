import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { movieSelector, LikedMovieSelector } from "../Redux/MovieSlice";
import MovieCard from "../Components/MovieCard";
import Style from "../Styles/favs.module.css";

function Favorites() {
  const movies = useSelector(movieSelector);
  const favs = useSelector(LikedMovieSelector);
  const dispatch = useDispatch();
  if (favs.length == 0) {
    return (
      <div className="mt-[100px] flex justify-center items-center gap-6 flex-wrap flex-col px-6">
        <img src="https://cdn-icons-png.flaticon.com/128/983/983046.png" />
        <p className="text-xl font-bold text-gray-500 text-center">
          No favorite movies yet. Start adding some!
        </p>
        <Link
          to="/"
          className={`bg-custom-color py-2 px-4 rounded text-white font-semibold ${Style.nofavs}`}
        >
          {" "}
          Add Favorite Movies
        </Link>
      </div>
    );
  }
  return (
    <div className="py-20 sm:p-20 flex justify-evenly flex-wrap gap-16">
      {movies.map((m, index) =>
        favs.find((i) => i == m.id) ? (
          <MovieCard
            id={m.id}
            name={m.movie}
            image={m.image}
            rating={m.rating}
            imdb_url={m.imdb_url}
          />
        ) : null
      )}
    </div>
  );
}

export default Favorites;
