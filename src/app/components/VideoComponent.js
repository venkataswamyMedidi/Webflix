/**
 * Created by Medidi Venkataswamy on 7/28/2017.
 */
import React, { PropTypes } from "react";

import videoUrls from "../constants/videoUrls";
var monaImage = require("../images/moanas.jpg");

export class VideoComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  static defaultProps = {
    movieId: "default",
  };

  render() {
    return (
      <div>
        <video
          type="video/mp4"
          autoPlay="true"
          width="900"
          height="500"
          src={videoUrls[this.props.movieId]}
          controls
        ></video>
      </div>
    );
  }
}
