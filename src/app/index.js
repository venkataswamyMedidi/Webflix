import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, browserHistory, IndexRoute } from "react-router";

import { Home } from "./components/Home";
import { SigninPage } from "./signingpage";
import { Registerdetails } from "./Registerdetails";
import { Root } from "./components/Root";
require("./stylesheets/scss/sample.scss");
import { Trailers } from "./components/Trailers";
import { Plan } from "./components/plan";
import MoviesContainer from "./containers/moviesContainer";
import { Provider } from "react-redux";
import store from "./store/store";
import { ModelDialog } from "./components/ModelDialog";

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Router history={browserHistory}>
          <Route path={"/"} component={Root}>
            <IndexRoute component={Home} />
            <Route path={"/login"} component={SigninPage} />
            <Route path={"/register"} component={Registerdetails} />
            <Route path={"/userhome"} component={Trailers} />
            <Route path={"/plan"} component={Plan} />
            <Route path={"/movies"} component={MoviesContainer} />
            <Route path={"/modal"} component={ModelDialog} />
          </Route>
        </Router>
      </Provider>
    );
  }
}
ReactDOM.render(<App />, document.getElementById("app"));
