import React from "react";
import Header from "./Header";
import useNowPlayingmovies from "../CustomHooks/useNowPlayingmovies";
import Maincontainer from "./Maincontainer";
import Secondarycontainer from "./Secondarycontainer";



const Browse = () => {
  useNowPlayingmovies();


  return (
    <div>
      <Header />
      <Maincontainer />
      <Secondarycontainer/>
  
      <h2>Browse Page</h2>
    </div>
  );
};

export default Browse;
