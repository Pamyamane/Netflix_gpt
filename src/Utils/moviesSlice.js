import { createSlice } from "@reduxjs/toolkit";

 const moviesSlice = createSlice({
    name : 'Movies',
    initialState:{
        NowPalyingmovie: null,
        TrailerVideo :null,
        PopularMoviesList :null,
        addTopRatedmovies:null,

    },
    reducers: {
        addNowPalyingMovies:(state , action) =>{
            state.NowPalyingmovie =  action.payload
        },
        addTrailerVideo:(state , action)=>{
            state.TrailerVideo =  action.payload
        },
        addPopularMovies:(state , action)=>{
            state.PopularMoviesList =  action.payload
        },
        addTopRatedmovies:(state , action)=>{
            state.addTopRatedmovies =  action.payload
        },
        
    },
 })

 export const { addNowPalyingMovies , addTrailerVideo ,addPopularMovies,addTopRatedmovies} = moviesSlice.actions;

 export default moviesSlice.reducer;