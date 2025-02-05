import { configureStore } from "@reduxjs/toolkit";
import  userReducer  from "../Utils/UserSlice";
import  moviesReducer  from "../Utils/moviesSlice";

const appStore = configureStore({
  reducer: {
    user:userReducer,
    movies :moviesReducer,
    PopularMovies :moviesReducer
  },
});

export default appStore;
