import React from "react";
import LasVegas from "../public/las-vegas.jpg";

export interface IVideoPlayerProps {
  name: string;
}

const VideoPlayer: React.FunctionComponent<IVideoPlayerProps> = ({ name }) => {
  return (
    <div>
      <img src={LasVegas}></img>
    </div>
  );
};

export default VideoPlayer;
