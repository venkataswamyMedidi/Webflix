/**
 * Created by Medidi Venkataswamy on 6/20/2017.
 */

import React from "react";
import axios from "axios";
import { browserHistory } from "react-router";
import { isLoggedIn } from "./constants/IsLoggedIn";

const handshake = require("./images/cars.jpg");

export class SigninPage extends React.Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: "",
      error: "hide",
    };
    this.onClickSubmit = this.onClickSubmit.bind(this);
  }

  componentWillMount() {
    if (isLoggedIn()) {
      browserHistory.push("/detail");
    } else {
      browserHistory.push("/login");
    }
  }

  onClickSubmit(e) {
    e.preventDefault();
    var signInData = {
      username: this.state.username,
      password: this.state.password,
    };
    console.log("username ", signInData.username);
    console.log("password", signInData.password);

    axios
      .post("http://localhost:8080/signin", signInData)
      .then((res) => {
        console.log("Login response", res);
        this.onClickSubmitCallBack(res.data);
      })
      .catch((err) => {
        console.log("server error ", err);
      });
  }

  onClickSubmitCallBack(result) {
    if (result.errorres) {
      this.setState({ error: "show" });
      console.log("user name and password doesn't exist");
    } else {
      console.log(
        "token and pname",
        result.datares.token,
        result.datares.pname
      );
      location.reload();
      browserHistory.push("/userhome");
      localStorage.setItem("token", result.datares.token);
    }
  }

  render() {
    return (
      <div className="container-fluid signin-bg">
        {/*<div className="row"><img src={} width="1350px" height="550px"/></div>*/}
        <div className="row signin col-md-offset-3">
          <br />
          <h3>
            <b>Sign To Your Account</b>
          </h3>
          <br />
          <form onSubmit={this.onClickSubmit}>
            <div className="form-group col-sm-8 ">
              <label className="control-label " htmlFor="username">
                username:
              </label>
              <input
                type="username"
                className="form-control"
                id="username"
                placeholder="Enter username"
                onChange={(e) => {
                  this.setState({ username: e.target.value });
                }}
                value={this.state.username}
                name="username"
              />
            </div>
            <div className="form-group col-sm-8">
              <label className="control-label" htmlFor="pwd">
                Password:
              </label>
              <input
                type="password"
                className="form-control"
                id="pwd"
                placeholder="Enter password"
                name="pwd"
                onChange={(e) => {
                  this.setState({ password: e.target.value });
                }}
                value={this.state.password}
              />
            </div>
            <div className="form-group">
              <div className="col-sm-offset-2 col-sm-10">
                <label>
                  <input type="checkbox" name="remember" /> Remember me
                </label>
              </div>
            </div>
            <div className="form-group">
              <div className="col-sm-offset-0 col-sm-8">
                <button type="submit" className="btn btn-primary btn-block">
                  Login
                </button>
              </div>
            </div>
            <div className="form-group">
              <div className="col-sm-offset-0 col-sm-8">
                <b className={this.state.error}>
                  {" "}
                  username and password does not exist
                </b>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
};
