import React, { useEffect } from "react";
import { options } from "../Utils/Constant";
import { useDispatch } from "react-redux";
import { addNowPalyingMovies } from "../Utils/moviesSlice";
const useNowPlayingmovies = () => {
  const dispatch = useDispatch();

  const getNowPlayingMovie = async () => {
    const response = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?page=1",
      options
    );
    const data = await response.json();
   
    dispatch(addNowPalyingMovies(data.results));
  };

  useEffect(() => {
    getNowPlayingMovie();
  }, []);
};

export default useNowPlayingmovies;
