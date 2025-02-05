

import React, { useEffect } from "react";
import { options } from "../Utils/Constant";
import { useDispatch } from "react-redux";
import { addTopRatedmovies } from "../Utils/moviesSlice";
const useTopRatedmovies = () => {
  const dispatch = useDispatch();

  const TopRatedmovies = async () => {
    const response = await fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', options)
    
    const data = await response.json();
   
   
    dispatch(addTopRatedmovies(data.results));
  };

  useEffect(() => {
    TopRatedmovies();
  }, []);
};

export default useTopRatedmovies;
