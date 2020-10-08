import React, { Component } from "react";

import ReactAudioPlayer from "react-audio-player";

import mix1 from "../../mixes/Mix1.mp3";
import mix2 from "../../mixes/Mix2.mp3";
import mix3 from "../../mixes/Mix3.mp3";
import mix4 from "../../mixes/Mix4.mp3";
import mix5 from "../../mixes/Mix5.mp3";
import mix6 from "../../mixes/Mix6.mp3";
import mix7 from "../../mixes/Mix7.mp3";
import mix8 from "../../mixes/Mix8.mp3";
import mix9 from "../../mixes/Mix9.mp3";
import mix10 from "../../mixes/Mix10.mp3";
import mix11 from "../../mixes/Mix11.mp3";
import mix12 from "../../mixes/Mix12.mp3";
import mix13 from "../../mixes/Mix13.mp3";
import mix14 from "../../mixes/Mix14.mp3";

const mixes = [
  mix1,
  mix2,
  mix3,
  mix4,
  mix5,
  mix6,
  mix7,
  mix8,
  mix9,
  mix10,
  mix11,
  mix12,
  mix13,
  mix14,
];

class Song extends Component {
  constructor(props) {
    super();
    this.state = {};
  }

  render() {
    return (
      <div>
        <ReactAudioPlayer src={mixes[8]} controls />
      </div>
    );
  }
}

export default Song;
