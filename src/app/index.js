import React from "react";
import ReactDOM from "react-dom";
import {Router, Route, browserHistory, IndexRoute} from "react-router";

import {Home} from './components/Home';
import {SigninPage} from './signingpage';
import {Registerdetails} from './Registerdetails';
import {Root} from './components/Root';
require("./stylesheets/scss/sample.scss");
import { Sign } from './components/sign';
import { Plan } from './components/plan';


class App extends React.Component {
    render() {
        return (
            <Router history={browserHistory}>
                <Route path={"/"} component={Root}>
                    <IndexRoute component={Home}/>
                    <Route path={"/login"} component={SigninPage}/>
                    <Route path={"/register"} component={Registerdetails}/>
                    <Route path={"/userhome"} component={Sign}/>
                    <Route path={"/plan"} component={Plan}/>

                </Route>

            </Router>
        );
    }
}
ReactDOM.render(<App/>, document.getElementById('app'));