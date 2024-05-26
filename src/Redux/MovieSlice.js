import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchMovies = createAsyncThunk(
  "Movie/fetchMovies",
  async (action, thunk) => {
    const response = await fetch(`${process.env.REACT_APP_MOVIE_URL}`);
    const data = await response.json();
    data.sort((a, b) => b.rating - a.rating);
    return data;
  }
);

const initialState = {
  movies: [],
  favs: [],
  error: null,
  loading: false,
};
const movieslice = createSlice({
  name: "Movie",
  initialState: initialState,
  reducers: {
    likeMovie: (state, action) => {
      state.favs.push(action.payload);
    },
    unlikeMovie: (state, action) => {
      state.favs = state.favs.filter((m) => m != action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMovies.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchMovies.fulfilled, (state, action) => {
        state.loading = false;
        state.movies = action.payload;
      })
      .addCase(fetchMovies.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

//reducer
export const movieReducer = movieslice.reducer;

//actions
export const movieActions = movieslice.actions;

//setting up selectors
export const movieSelector = (state) => state.movieReducer.movies;
export const LikedMovieSelector = (state) => state.movieReducer.favs;
export const errorSelector = (state) => state.movieReducer.error;
export const loadingSelector = (state) => state.movieReducer.loading;
