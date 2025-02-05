import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ tittle, movies }) => {
  console.log(movies, "moviesList");

  return (
    <div className="relative px-4 sm:px-8 md:px-12 lg:px-16">
    {/* Section Title */}
    <h1 className="text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
      {tittle}
    </h1>
    
    {/* Movie Cards Scrollable Row - Fixed width container */}
    <div className="relative w-full overflow-hidden">
      <div className="flex overflow-x-auto space-x-4 md:space-x-6 pb-4 no-scrollbar">
        {movies?.map((movie) => (
          <div key={movie.id} className="flex-none">
            <MovieCard poster_path={movie?.poster_path} />
          </div>
        ))}
      </div>
    </div>
    
    {/* Custom CSS to hide scrollbar */}
    <style jsx>{`
      .no-scrollbar::-webkit-scrollbar {
        display: none;
      }
      .no-scrollbar {
        -ms-overflow-style: none;
        scrollbar-width: none;
      }
    `}</style>
  </div>
  );
};

export default MovieList;
