import React from "react";
import { useSelector } from "react-redux";
import Videobackground from "./Videobackground";
import VideoTittle from "./VideoTittle";
import useNowPlayingmovies from "../CustomHooks/useNowPlayingmovies";


const Maincontainer = () => {
  const nowPlayingMovies = useSelector((state) => state?.movies?.NowPalyingmovie);

  useNowPlayingmovies();

  if (!nowPlayingMovies) return null;


  const randomIndex = Math.floor(Math.random() * nowPlayingMovies.length);
  const FirstMovie = nowPlayingMovies[randomIndex];
  

  const { original_title, overview, id } = FirstMovie;

  return (
    <div className="relative w-full h-screen">
      {/* Background Video */}
      <Videobackground MovieId={id} />

      {/* Title and Description Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/30 to-transparent flex items-center px-6 md:px-12">
        <VideoTittle original_title={original_title} overview={overview} />
      </div>
    </div>
  );
};

export default Maincontainer;
