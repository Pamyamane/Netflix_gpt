import React from "react";
import Header from "./Header";
import useNowPlayingmovies from "../CustomHooks/useNowPlayingmovies";
import Maincontainer from "./Maincontainer";
import Secondarycontainer from "./Secondarycontainer";
import usePopularmovies from "../CustomHooks/usePopularmovies";
import useTopRatedmovies from "../CustomHooks/useTopRatedmovies";
import GptSearch from "./GptSearch";
import { useSelector } from "react-redux";

const Browse = () => {
  const showgGptSearch = useSelector((store) => store.GptSearch.ShowSearchView);

  useNowPlayingmovies();
  usePopularmovies();
  useTopRatedmovies();

  return (
    <div>
      <Header />
      {showgGptSearch ? (
        <GptSearch />
      ) : (
        <span>
          <Maincontainer />
          <Secondarycontainer />
        </span>
      )}
    </div>
  );
};

export default Browse;
