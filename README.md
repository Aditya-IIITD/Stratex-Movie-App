# Stratex-Movie-App

https://stratex-movie-app.vercel.app/

# Demo Video Link:

https://drive.google.com/file/d/1tbocDaA14gs2AgHOKzWn9uPjVhF940to/view?usp=sharing

# note:

The dummy movie API is not giving proper URLs for the images of the movies. The image paths returned are in the format "images/shawshank.jpg", which do not include the full URL required to display the images correctly. Because of which images are not rendered for movies.

CSS styling : tailwind <br/>
State Management: Redux toolkit <br/>
Deployed on Vercel: https://stratex-movie-app.vercel.app/

# Redux:

State = { movie:[ ...all movies ], favs: [...stores ids of fav movies], error: null(it stores in the , if some error occures during async thunk execution), loading: false(it stores the status of api call if, data is loading or not)}

Movie slice is created using createSlice function of @reduxjs/toolkit, it contains two actions "LikeMovie" to add a movie to favorites and "UnlikeMovie" to remove movie from favorites using filter function.

along with slice, a async thunk function (fetchMovies) is created to perform api call for fetching movies after app loads, fetchMovies is dispatched in Home.js Page inside useEffect with empty dependency array which will execute only once when Home.js component mounts

extraReducers are also used to handle the async thunk function which returns a promise, three cases are added to builder extrareducer, one case for async thunk promise pending ,next for promise fulfilled, next for promise rejected and based on each action state is being updated

selectors are also defined in MovieSlice.js file to simplify the accessing of state values from store. Like const movieSelector = (state) => state.movieReducer.movies, and 3 more for all state values

# Pages

there are two pages in this app, Home page and Favorites page for all favorite movies
both use same functionality, in Favorites page we are just filtering and rendering movies which are marked in favs state

# Components

there are two components Navbar and MovieCard

Navbar remains same throughout the app,
MovieCard also remains same for both Favorites and Home page just the difference is in Like/Unlike icon, in Favorites page all the icons would be "UNLIKE" but in home page it will have both "UNLIKE"(for liked item) & "LIKE" (heart shaped icon, for item which is not liked)

# Styles

.module.css files are used to limit the scope of css to a file only.
