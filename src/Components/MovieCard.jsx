import { Link } from "react-router-dom";
import Style from "../Styles/Moviecard.module.css";
import { movieActions, LikedMovieSelector } from "../Redux/MovieSlice";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { toast } from "react-toastify";
function MovieCard({ id, name, rating, image, imdb_url }) {
  const favs = useSelector(LikedMovieSelector);
  const dispatch = useDispatch();
  let liked = false;
  const addToFav = () => {
    toast.success("Movie added to favorites");

    dispatch(movieActions.likeMovie(id));
  };

  const removeFromFav = () => {
    toast.info("Movie removed from favorites");
    dispatch(movieActions.unlikeMovie(id));
  };
  if (favs.findIndex((i) => i == id) >= 0) {
    liked = true;
  }
  return (
    <div
      className={`min-h-[130px] w-6/12 md:w-4/12 lg:w-3/12 xl:w-2/12 p-4 flex flex-col justify-between gap-3 rounded shadow-lg ${Style.card}`}
      //   onClick={() => {
      //     window.open(imdb_url);
      //   }}
    >
      <p className="font-bold text-lg">{name}</p>
      <p>Rating: {rating}</p>
      <div className="flex justify-between">
        <img
          src={
            liked
              ? "https://cdn-icons-png.flaticon.com/128/9898/9898143.png"
              : "https://cdn-icons-png.flaticon.com/128/4340/4340223.png"
          }
          className={`h-[35px] cursor-pointer ${Style.btnImg}`}
          onClick={liked ? removeFromFav : addToFav}
        />
        <Link
          to={imdb_url}
          target="_blank"
          className={`bg-custom-color py-1 px-8 text-white font-bold 4 ${Style.visitBtn}`}
        >
          Visit
        </Link>
        {/* <img
          src="https://cdn-icons-png.flaticon.com/128/9898/9898143.png"
          className={`h-[35px] cursor-pointer ${Style.btnImg}`}
        /> */}
      </div>
      {/* <div className="flex justify-center">
        <Link
          to={imdb_url}
          target="_blank"
          className={`bg-custom-color py-1 px-8 text-white font-bold 4 ${Style.visitBtn}`}
        >
          Visit
        </Link>
      </div> */}
    </div>
  );
}

export default MovieCard;
