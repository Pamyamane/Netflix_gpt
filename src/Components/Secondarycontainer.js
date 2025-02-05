import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const Movies = useSelector((state) => state?.movies);

  return (
    <div className=" absolute bg-gradient-to-b bg-black min-h-screen">
      <div >
       <MovieList title="Now Playing" movies={Movies?.PopularMoviesList} />
        <MovieList title="Top Rated" movies={Movies?.addTopRatedmovies} />
        <MovieList title="Popular" movies={Movies?.NowPalyingmovie} />
        <MovieList title="Upcoming Movies" movies={Movies?.PopularMoviesList} /> 
        
      </div>
    </div>
  );
};

export default SecondaryContainer;
