import React from "react";
import Header from "./Header";
import useNowPlayingmovies from "../CustomHooks/useNowPlayingmovies";
import Maincontainer from "./Maincontainer";
import Secondarycontainer from "./Secondarycontainer";
import usePopularmovies from "../CustomHooks/usePopularmovies";
import useTopRatedmovies from "../CustomHooks/useTopRatedmovies";



const Browse = () => {
  useNowPlayingmovies();
  usePopularmovies();
  useTopRatedmovies();


  return (
    <div>
      <Header />
      <Maincontainer />
      <Secondarycontainer/>
  
     
    </div>
  );
};

export default Browse;
