/**
 * Created by Medidi venkata swamy on 6/7/2017.
 */
import React from 'react';

import ScrollToTop from "react-scroll-up";
export class Footer extends React.Component {


    render() {
        return (
            <div className="background" style={{border: "none"}}>
                <footer>
                    <div className="container-fluid contact-info">
                        <div className="row">

                            <div className="col-md-4">
                                <h3> Contact </h3>
                                <ul>
                                    <li><a href="#"> FAQ </a></li>
                                    <li><a href="#"> Investor Relations </a></li>
                                    <li><a href="#"> Terms of use </a></li>
                                    <li><a href="#"> Help Center </a></li>
                                </ul>
                            </div>

                            <div className="col-md-4">
                                <h3> Important Links </h3>
                                <ul>
                                    <li><a href="#"> Privacy </a></li>
                                    <li><a href="#"> Jobs </a></li>
                                    <li><a href="#"> Gift cards </a></li>
                                    <li><a href="#"> Netfilx Original </a></li>
                                    <li><a href="#"> Media center </a></li>
                                    <li><a href="#"> Tender </a></li>

                                </ul>
                            </div>
                            <div className="col-md-4">
                                <h3> To Get Information </h3>
                                <ul>
                                    <li><a href="#"> Account </a></li>
                                    <li><a href="#"> ways to watch </a></li>
                                    <li><a href="#"> cookies Preferencees </a></li>
                                    <li><a href="#"> Corporate Information </a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <br/>
                        <div className="container-fluid ">
                            <div className="row">
                                <strong className="col-xs-4"> <b style={{color:"red",fontSize:"15px"}}>Copyright © 2017, NETFILX. All rights reserved.</b></strong>

                                <div className="col-xs-4"><a href="https://www.facebook.com/bootsnipp"><i id="social-fb"
                                                                                                          className="fa fa-facebook-square fa-3x social"></i></a>
                                    &nbsp;  <a href="https://twitter.com/bootsnipp"><i id="social-tw"
                                                                                       className="fa fa-twitter-square fa-3x social"></i></a>
                                    &nbsp; <a href="https://plus.google.com/+Bootsnipp-page"><i id="social-gp"
                                                                                                className="fa fa-google-plus-square fa-3x social"></i></a>
                                    &nbsp; <a href="mailto:bootsnipp@gmail.com"><i id="social-em"
                                                                                   className="fa fa-envelope-square fa-3x social"></i></a>
                                </div>
                                <div className="col-xs-4">
                                    <ul className="nav nav-pills payments">
                                        <li><i className="fa fa-cc-visa"></i></li>
                                        <li><i className="fa fa-cc-mastercard"></i></li>
                                        <li><i className="fa fa-cc-amex"></i></li>
                                        <li><i className="fa fa-cc-paypal"></i></li>
                                    </ul>
                                </div>
                            </div>
                    </div>
                    <div className="scroll">
                        <ScrollToTop showUnder={200}>
                            <td><i className="glyphicon glyphicon-menu-up" aria-hidden="true"></i></td>
                        </ScrollToTop>
                    </div>

                </footer>
            </div>

        );
    }
}


