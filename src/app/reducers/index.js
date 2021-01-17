import { combineReducers } from "redux";
import moviesReducer from "./moviesReducer";

const appReducer = combineReducers({
  netflixMovies: moviesReducer,
});

export default appReducer;
