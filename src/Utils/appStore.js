import { configureStore } from "@reduxjs/toolkit";
import  userReducer  from "../Utils/UserSlice";
import  moviesReducer  from "../Utils/moviesSlice";
import  GptReducer  from "../Utils/GptSlice";

const appStore = configureStore({
  reducer: {
    user:userReducer,
    movies :moviesReducer,
    PopularMovies :moviesReducer,
    GptSearch :GptReducer
  },
});

export default appStore;
