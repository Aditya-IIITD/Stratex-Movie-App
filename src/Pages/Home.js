import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  movieSelector,
  fetchMovies,
  loadingSelector,
  errorSelector,
  movieActions,
} from "../Redux/MovieSlice";
import MovieCard from "../Components/MovieCard";
import { ThreeDots } from "react-loader-spinner";
import { toast } from "react-toastify";

function Home() {
  const movies = useSelector(movieSelector);
  const loading = useSelector(loadingSelector);
  const error = useSelector(errorSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    if (movies.length == 0) dispatch(fetchMovies());
    // const data = localStorage.getItem("favorites");
    // console.log("favs", data);
    // dispatch(movieActions.setFavs(data));
  }, []);

  if (loading) {
    return (
      <div className=" text-center flex justify-center mt-[200px]">
        <ThreeDots color="#5948f3" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="mt-[100px] flex justify-center items-center gap-6 flex-wrap flex-col">
        <img src="https://cdn-icons-png.flaticon.com/128/6639/6639444.png" />
        <p className="text-xl font-bold text-gray-500">
          Error while fetching movies: {error}
        </p>
      </div>
    );
  }
  return (
    <div className="py-20 sm:p-20 flex justify-evenly flex-wrap gap-16">
      {movies.map((m, index) => (
        <MovieCard
          key={index}
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
