import React from "react";
import useNowPlayingTrailer from "../CustomHooks/useNowPlayingTrailer";
import { useSelector } from "react-redux";

const Videobackground = ({ MovieId }) => {
  const Trailer = useSelector((state) => state?.movies?.TrailerVideo);
  const Trailerkey = Trailer?.key;

  useNowPlayingTrailer({ MovieId });

  return (
    <div className="absolute top-0 left-0 w-full h-full -z-10 overflow-hidden">
     <iframe
        className="w-full h-full object-cover"
        src={`https://www.youtube.com/embed/${Trailerkey}?autoplay=1&controls=0&showinfo=0&rel=0&loop=1&playlist=${Trailerkey}`}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  );
};

export default Videobackground;
