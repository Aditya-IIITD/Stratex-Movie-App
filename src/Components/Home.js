import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  movieSelector,
  fetchMovies,
  loadingSelector,
  errorSelector,
} from "../Redux/MovieSlice";
import MovieCard from "./MovieCard";

function Home() {
  const movies = useSelector(movieSelector);
  const loading = useSelector(loadingSelector);
  const error = useSelector(errorSelector);
  const dispatch = useDispatch();
  useEffect(() => {
    if (movies.length == 0) dispatch(fetchMovies());
  }, []);

  if (loading) {
    return <div>loading...</div>;
  }

  if (error) {
    return <div>error while fetching movies: {error}</div>;
  }
  return (
    <div className="py-20 sm:p-20 flex justify-evenly flex-wrap gap-16">
      {movies.map((m, index) => (
        <MovieCard
          id={m.id}
          name={m.movie}
          image={m.image}
          rating={m.rating}
          imdb_url={m.imdb_url}
        />
      ))}
    </div>
  );
}

export default Home;
