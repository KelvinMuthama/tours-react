import React, { useState } from "react";
import { vid01, vid02, vid03 } from "./imports";
import "./video.css";

const Video = () => {
  const [videoSrc, setVideoSrc] = useState(vid01);

  const nextVid1 = () => setVideoSrc(vid01);
  const nextVid2 = () => setVideoSrc(vid02);
  const nextVid3 = () => setVideoSrc(vid03);

  return (
    <div className="video-container">
      <video src={videoSrc} muted autoPlay loop className="video"></video>
      <div className="controls">
        <span className="control-btn" onClick={nextVid1}></span>
        <span className="control-btn" onClick={nextVid2}></span>
        <span className="control-btn" onClick={nextVid3}></span>
      </div>
    </div>
  );
};

export default Video;
