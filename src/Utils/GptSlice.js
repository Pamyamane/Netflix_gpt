import { createSlice } from "@reduxjs/toolkit";

const GptSlice = createSlice({
    name: "GptSlice",
    initialState: {
        ShowSearchView : false,
    },
    reducers:{
        ToggleGptSearchView: (state) => {
            state.ShowSearchView = !state.ShowSearchView;
        }
    }
})

export const { ToggleGptSearchView } = GptSlice.actions;

export default GptSlice.reducer