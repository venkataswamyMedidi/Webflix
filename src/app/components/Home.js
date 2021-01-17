/**
 * Created by Medidi Venkataswamy on 6/7/2017.
 */
import React from "react";
import { Carousel } from "react-bootstrap";

import { Link } from "react-router";

const Netfilx3 = require("../images/netfilx3.jpg");
const carimage = require("../images/reason.png");
const doctorimage = require("../images/doctor.png");
const hundered = require("../images/the100.jpg");
const loganimage = require("../images/logan.png");

export class Home extends React.Component {
  render() {
    return (
      <div>
        <div className="container-fluid">
          <div className="row">
            <Carousel>
              <Carousel.Item>
                <img width={1440} height={600} alt="700x400" src={Netfilx3} />
                <Carousel.Caption>
                  <h3>SEE WHAT'S NEXT</h3>
                  <p>Watch form anywhere .cancel anytime</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img width={1440} height={600} alt="700x400" src={loganimage} />
                <Carousel.Caption>
                  <h3>MOVIES,TV SHOWS</h3>
                  <p>Don't dare to miss!.</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img width={1440} height={600} alt="700x400" src={carimage} />
                <Carousel.Caption>
                  <h3>Try free Trail</h3>
                  <p>Just create a Account.</p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </div>
        </div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-xs-6 mvBlock">
              <h4>
                <strong style={{ color: "orange" }}>DOCTOR STRANGE</strong>
              </h4>
              <p>
                The character's origin story relates that he was once a
                brilliant but egotistical surgeon. After a car accident severely
                damages his hands and hinders his ability to perform surgery, he
                searches the globe for a way to repair them and encounters the
                Ancient One.
              </p>
              <img
                style={{ width: 100 + "%", height: "360px" }}
                alt="700x400"
                src={doctorimage}
              />
            </div>
            <div className="col-xs-6 mvBlock">
              <h4>
                <strong style={{ color: "orange" }}>THE 100</strong>
              </h4>
              <p>
                The 100.The Hundred is an American post-apocalyptic science
                fiction drama television series that premiered on March 19,
                2014, on The CW. The series, developed by Jason Rothenberg, is
                loosely based on a 2013 book of the same name, the first in a
                series by Kass Morgan.
              </p>
              <img
                style={{ width: 100 + "%", height: "360px" }}
                alt="700x400"
                src={hundered}
              />
            </div>
          </div>
          <div className="row text">
            <span>
              Just click on and start your free trail -- No commitment, Cancel
              online anytime.
            </span>
          </div>
          &nbsp;
          <div className="row membership">
            <Link to="/plan" className="btn btn-primary btn-block">
              Start Your Membership
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
