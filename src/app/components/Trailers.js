/**
 * Created by Medidi venkata swamy on 6/21/2017.
 */
import React, {PropTypes} from "react";
import {Link, browserHistory} from "react-router";
import {Player, ControlBar} from 'video-react';


const img = require("../images/iron.png");
const mom = require("../images/Themummy.jpg")
const wick = require("../images/john.jpg")
const man = require("../images/spiderman.jpg")
const evil = require("../images/evil.jpg")
const bad = require("../images/itb.jpg")
const fist = require("../images/fist.jpg")
const war = require("../images/war.jpg")
const Dun = require("../images/Dun.jpg")

const Mummy = require('../videos/Mummy.mp4');
const Spider = require('../videos/spider.mp4');
const John = require('../videos/john.mp4');
const Ash = require('../videos/Ash vs Evil Dead.mp4');
const Badlands = require('../videos/Into the Badlands Comic Con.mp4');
const Iron = require('../videos/Marvels IRON FIST.mp4');
const Apes = require('../videos/WAR FOR THE PLANET OF THE APES.mp4');
const kirk = require('../videos/Dunkirk.mp4')
export class Trailers extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};

    }

    render() {
        return (
            <div>
                <strong style={{color: "blue"}}>Movies & TV series Trailers</strong>
                <div className="container-fluid movieslist">
                    <div className="list-unstyled video-list-thumbs row">
                        <div className="col-xs-4 col-sm-3 col-xs-6">
                            <a href="#" title="The Mummy">
                                <div className="embed-responsive embed-responsive-16by9 video-desc">
                                    <video poster={mom} src={Mummy} controls="hidden"/>
                                </div>
                                <em>The Mummy:Action-Adventure film directed by Alex Kurtzman</em>
                                <span className="glyphicon glyphicon-play-circle" hidden="hidden"></span>
                            </a>
                        </div>
                        <div className="col-xs-4 col-sm-3 col-xs-6">
                            <a href="#" title="Spider-Man: Homecoming">
                                <div className="embed-responsive embed-responsive-16by9 video-desc">
                                    <Player ref="player" poster={man} src={Spider}/>
                                </div>
                                <em>Spider-Man: Homecoming,based on the Marvel Comics by Jon watts</em>
                                <span className="glyphicon glyphicon-play-circle"></span>
                            </a>
                        </div>
                        <div className="col-xs-4 col-sm-3 col-xs-6">
                            <a href="#" title="John Wick">
                                <div className="embed-responsive embed-responsive-16by9 video-desc">
                                    <Player ref="player" poster={wick} src={John}>
                                    </Player>
                                </div>
                                <em>John Wick:neo-noir action thriller film directed by Chad Stahelski</em>
                                <span className="glyphicon glyphicon-play-circle"></span>
                            </a>
                        </div>
                        <div className="col-xs-4 col-sm-3 col-xs-6">
                            <a href="#" title="Ash vs Evil">
                                <div className="embed-responsive embed-responsive-16by9 video-desc">
                                    <Player ref="player" poster={evil} src={Ash}>
                                    </Player>
                                </div>
                                <em>Ash vs Evil:comedy horror television series developed by Sam Raimi,Ivan
                                    Raimi</em>
                                <span className="glyphicon glyphicon-play-circle"></span>
                            </a>
                        </div>

                        <div className="col-xs-4 col-sm-3 col-xs-6">
                            <a href="#" title="Into the Badlands">
                                <div className="embed-responsive embed-responsive-16by9 video-desc">
                                    <Player autoplay ref="player" poster={bad} src={Badlands}>
                                        <ControlBar autoHide={false}/>
                                    </Player>
                                </div>
                                <em>Into the Badlands:American television series developed by Alfred Gough
                                    Miles Millar</em>
                                <span className="glyphicon glyphicon-play-circle"></span>
                            </a>
                        </div>

                        <div className="col-xs-4 col-sm-3 col-xs-6">
                            <a href="#" title="Iron Fist">
                                <div className="embed-responsive embed-responsive-16by9 video-desc">
                                    <Player autoplay ref="player" poster={fist} src={Iron}>
                                        <ControlBar autoHide={true}/>
                                    </Player>
                                </div>
                                <em>Marvel's Iron Fist:web television series created for Netflix by Scott Buck,
                                    based on the Marvel Comics </em>
                                <span className="glyphicon glyphicon-play-circle"></span>
                            </a>
                        </div>
                        <div className="col-xs-4 col-sm-3 col-xs-6">
                            <a href="#" title="War of the planet of the Apes">
                                <div className="embed-responsive embed-responsive-16by9 video-desc">
                                    <Player autoplay ref="player" poster={war} src={Apes}/>
                                </div>
                                <em>War for the Planet of the Apes:fiction film directed by Matt Reeves and written
                                    by Mark Bomback and Reeves </em>
                                <span className="glyphicon glyphicon-play-circle"></span>
                            </a>
                        </div>
                        <div className="col-xs-4 col-sm-3 col-xs-6">
                            <a href="#" title="Dunkirk">
                                <div className="embed-responsive embed-responsive-16by9 video-desc">
                                    <video autoPlay="stop" poster={Dun} src={kirk} controls="true"/>
                                </div>
                                <em>Dunkirk :English-language war film[nb 2] written, co-produced and directed by
                                    Christopher Nolan </em>
                                <span className="glyphicon glyphicon-play-circle" controls="hidden"></span>
                            </a>
                        </div>

                    </div>
                </div>

            </div>
        );


    }
}


