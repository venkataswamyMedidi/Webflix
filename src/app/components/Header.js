/**
 * Created by Medidi Venkataswamy on 6/7/2017.
 */
import React from "react";
import { Link, browserHistory } from "react-router";
import { isLoggedIn } from "../constants/IsLoggedIn";
import axios from "axios";

const logo = require("../images/logo.jpg");

export class Header extends React.Component {
  constructor() {
    super();
    this.state = {
      signInLink: "show",
      signOutLink: "hide",
    };
    this.signout = this.signout.bind(this);
  }

  componentWillMount() {
    if (isLoggedIn()) {
      this.setState({
        signInLink: "hide",
        signOutLink: "show",
      });
    } else {
      this.setState({
        signInLink: "show",
        signOutLink: "hide",
      });
    }
  }

  signout(e) {
    var token = localStorage.getItem("token");
    console.log("tokennnnnnnnnnn" + token);
    var config = {
      headers: { "Content-Type": "application/json", token: token },
    };

    axios
      .post("http://localhost:8080/signout", config)
      .then((res) => {
        console.log(res);
        this.signoutCallBack(res.data);
      })
      .catch((err) => {
        console.log("server error");
      });
  }

  signoutCallBack(result) {
    if (result.error) {
      localStorage.removeItem("token");
      localStorage.removeItem("userName");
      console.log("error in result body");
    } else {
      localStorage.removeItem("token");
      localStorage.removeItem("userName");
      location.reload();
      browserHistory.push("/");
      console.log("successfully signedout");
    }
  }

  render() {
    return (
      <div>
        <nav className="navbar navbar-default">
          <div>
            <div className="navbar-header">
              <button
                type="button"
                className="navbar-toggle"
                data-toggle="collapse"
                data-target="#myNavbar"
              >
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              <span className="navbar-brand">
                <b style={{ color: "red" }}>WEBFLIX</b>
              </span>
            </div>
            <div className="collapse navbar-collapse" id="myNavbar">
              <ul className="nav navbar-nav navbar-right">
                <li className={this.state.signInLink}>
                  <Link to={""}>
                    <strong>Home</strong>
                  </Link>
                </li>
                <li className={this.state.signInLink}>
                  <Link to={"/login"}>
                    <strong>Login</strong>
                  </Link>
                </li>
                <li className={this.state.signInLink}>
                  <Link to={"/plan"}>
                    <strong>Membership</strong>
                  </Link>
                </li>
                <li className={this.state.signOutLink}>
                  <Link to={"/userhome"}>
                    <strong>Trailers</strong>
                  </Link>
                </li>
                <li className={this.state.signOutLink}>
                  <Link to={"/movies"}>
                    <strong>Movies</strong>
                  </Link>
                </li>
                <li className={this.state.signOutLink}>
                  <Link to="/" onClick={this.signout}>
                    <strong>Signout</strong>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}
