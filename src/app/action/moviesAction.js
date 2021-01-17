/**
 * Created by Medidi Venkataswamy on 7/13/2017.
 */

import axios from "axios";
import React from "react";
import * as API from "../constants/api";
import * as types from "../constants/actionTypes";

export function fetchMovies() {
  return function (dispatch) {
    axios
      .get(API.NETFLIX)
      .then((res) => {
        //success
        dispatch({
          type: types.FETCH_MOVIES,
          payload: res.data,
        });
      })
      .catch((err) => {
        //error
        console.log(
          " Netflix fetchMovies Action : movies service failed: ",
          err
        );
      });
  };
}
