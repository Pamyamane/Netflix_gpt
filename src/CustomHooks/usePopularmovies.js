

import React, { useEffect } from "react";
import { options } from "../Utils/Constant";
import { useDispatch } from "react-redux";
import { addPopularMovies } from "../Utils/moviesSlice";
const usePopularmovies = () => {
  const dispatch = useDispatch();

  const Popularmovies = async () => {
    const response = await fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1', options)
    
    const data = await response.json();
   
   
    dispatch(addPopularMovies(data.results));
  };

  useEffect(() => {
    Popularmovies();
  }, []);
};

export default usePopularmovies;
