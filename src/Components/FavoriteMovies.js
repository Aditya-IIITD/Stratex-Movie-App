import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  movieSelector,
  fetchMovies,
  loadingSelector,
  errorSelector,
  LikedMovieSelector,
} from "../Redux/MovieSlice";
import MovieCard from "./MovieCard";

function Favorites() {
  const movies = useSelector(movieSelector);
  const favs = useSelector(LikedMovieSelector);
  const dispatch = useDispatch();

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
