/**
 * Created by Medidi venkata swamy on 6/21/2017.
 */
import React from "react";
import {Link, browserHistory} from "react-router";

const Mummy = require('../videos/Mummy.mp4');
const Spider = require('../videos/spider.mp4');
const John = require('../videos/john.mp4');

export class Sign extends React.Component {

    render() {
        return (
            <div>
                <strong>Added Movies</strong>
                <div className="container-fluid">

                    <div className="row">
                        <div className="col-xs-4">
                            <div className="embed-responsive embed-responsive-16by9">
                                <iframe className="embed-responsive-item"
                                        src={Mummy}></iframe>

                            </div>
                        </div>
                        <div className="col-xs-4">
                            <a href="#" title="SPIDER MAN"/>
                            <div className="embed-responsive embed-responsive-16by9">
                                <iframe className="embed-responsive-item"
                                        src={Spider}></iframe>
                            </div>
                        </div>
                        <div className="col-xs-4">
                            <div className="embed-responsive embed-responsive-16by9">
                                <a href="#" title="JOHN WICK"/>
                                <div className="breaker">
                                    <div className="line"></div>
                                </div>
                                <div className="buttonContent">
                                    <div className="linkArrowContainer">
                                        <div className="iconArrowRight"></div>
                                        <div className="iconArrowRightTwo"></div>
                                    </div>

                                    <iframe className="embed-responsive-item" src={John}></iframe>
                                </div>

                            </div>

                        </div>

                    </div>
                </div>
            </div>


                );
                }
                }