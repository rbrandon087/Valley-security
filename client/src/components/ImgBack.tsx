import React from "react";
import LasVegas from "../public/las-vegas.jpg";

export interface IVideoPlayerProps {
  name: string;
}

const VideoPlayer: React.FunctionComponent<IVideoPlayerProps> = ({ name }) => {
  return (
    <div>
      <img src={LasVegas} className="h-screen bg-cover bg-center"></img>
    </div>
  );
};

export default VideoPlayer;
