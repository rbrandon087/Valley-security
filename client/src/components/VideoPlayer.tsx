import React from "react";
import Vegas from "../public/las-vegas.jpg";

export interface IVideoPlayerProps {
  name: string;
}

const VideoPlayer: React.FunctionComponent<IVideoPlayerProps> = ({ name }) => {
  const videoUrl = "https://youtu.be/Fxl6OP_qe2A?si=94C6o77md7qLtOdj";
  return (
    <div className="h-screen">
      <img
        src={Vegas}
        className="absolute -top-8 left-0 w-full h-full object-cover mt-8"
      ></img>
    </div>
  );
};

export default VideoPlayer;
