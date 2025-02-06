import React from "react";
import useNowPlayingTrailer from "../CustomHooks/useNowPlayingTrailer";
import { useSelector } from "react-redux";

const Videobackground = ({ MovieId }) => {
  const Trailer = useSelector((state) => state?.movies?.TrailerVideo);
  const Trailerkey = Trailer?.key;

  useNowPlayingTrailer({ MovieId });

  return (
    <div className="w-screen h-screen fixed top-0 left-0 -z-10">
    <iframe
      className="w-full h-full object-cover pointer-events-none"
      src={`https://www.youtube.com/embed/${Trailerkey}?autoplay=1&controls=0&showinfo=0&rel=0&loop=1&playlist=${Trailerkey}`}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    />
  </div>
  );
};

export default Videobackground;
