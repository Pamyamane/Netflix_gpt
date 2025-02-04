import React, { useEffect } from "react";
import { options } from "../Utils/Constant";
import { useDispatch } from "react-redux";
import { addTrailerVideo } from "../Utils/moviesSlice";

const useNowPlayingTrailer = ({ MovieId }) => {
  const dispatch = useDispatch();
  const getMovieVideo = async () => {
    const response = await fetch(
      "https://api.themoviedb.org/3/movie/" +
        MovieId +
        "/videos?language=en-US",
      options
    );
    const data = await response.json();
   

   
    
    const FilterVideos = data.results.filter(
      (Video) => Video.type == "Trailer"
    );
    const Trailer = FilterVideos.length ? FilterVideos[0] : data.results[0];
    
    dispatch(addTrailerVideo(Trailer));
  };

  useEffect(() => {
    getMovieVideo();
  }, []);
};

export default useNowPlayingTrailer;
