import React from "react";

export interface IVideoPlayerProps {
  name: string;
}

const VideoPlayer: React.FunctionComponent<IVideoPlayerProps> = ({ name }) => {
  return (
    <div>
      <img src={""} className="h-screen bg-cover bg-center" />
    </div>
  );
};

export default VideoPlayer;
