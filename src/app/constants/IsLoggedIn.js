/**
 * Created by Medidi venkata swamy on 6/21/2017.
 */

import { browserHistory } from "react-router";
export const isLoggedIn = () => {
  if (localStorage.getItem("token")) {
    return true;
  } else {
    return false;
  }
};
