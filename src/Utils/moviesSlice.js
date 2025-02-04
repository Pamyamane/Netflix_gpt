import { createSlice } from "@reduxjs/toolkit";

 const moviesSlice = createSlice({
    name : 'Movies',
    initialState:{
        NowPalyingmovie: null,
        TrailerVideo :null,

    },
    reducers: {
        addNowPalyingMovies:(state , action) =>{
            state.NowPalyingmovie =  action.payload
        },
        addTrailerVideo:(state , action)=>{
            state.TrailerVideo =  action.payload
        },
    },
 })

 export const { addNowPalyingMovies , addTrailerVideo } = moviesSlice.actions;

 export default moviesSlice.reducer;