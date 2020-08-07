import { combineReducers } from "redux";
import { selectedMovieReducer } from "./selectedMovie/reducer";
import { modalReducer } from "../redux/modal/reducer";
import { searchMovieReducer } from "./searchMovie/reducer";

export const appReducer = combineReducers({
  selectedMovie: selectedMovieReducer,
  isModal: modalReducer,
  searchMovie: searchMovieReducer,
});
