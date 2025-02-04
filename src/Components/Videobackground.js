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
        src={`https://www.youtube.com/embed/${Trailerkey}?autoplay=1&loop=1&playlist=${Trailerkey}`}
        title="YouTube video player"
        allow="autoplay; encrypted-media"
      />
    </div>
  );
};

export default Videobackground;
