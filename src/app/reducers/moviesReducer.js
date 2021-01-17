/**
 * Created by Medidi Venkataswamy on 7/13/2017.
 */

import { FETCH_MOVIES } from "../constants/actionTypes";

const INITIAL_STATE = { movies: [] };
export default function (state = INITIAL_STATE, action) {
  console.log("movie reducer", action.payload);
  switch (action.type) {
    case FETCH_MOVIES:
      return {
        ...state,
        movies: action.payload,
      };
    default:
      return state;
  }
}
