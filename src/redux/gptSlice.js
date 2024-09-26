import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name : "gpt",
    initialState : {
        showGPTSearch : false,
        movieNames : null,
        movieResults : null,
    },
    reducers : {
        toggleGPTSearchView : (state) => {
            state.showGPTSearch = !state.showGPTSearch;
        },

        addGPTMoviesResults : (state, action) => {
            const { movieNames, movieResults } = action.payload;
            state.movieNames = movieNames;
            state.movieResults = movieResults;
            
        },

        removeGPTMovies : (state) => {
            state.movieNames = null;
            state.movieResults = null;
        }
    }
});

export const {toggleGPTSearchView, addGPTMoviesResults, removeGPTMovies} = gptSlice.actions;

export default gptSlice.reducer;